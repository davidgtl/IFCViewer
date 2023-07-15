import * as tjs from 'three'

/**
  Chop polygon into non-thin triangles
  -- similar to earcut, but greedy
  @param vertices - array of individual x,y,z coordinates
  @param polyloop - array of indexes into vertices,
                    last index is assumed connected to first index
*/
function triangulatePotato(vertices, polyloop) {

  if (polyloop.length < 3) {
    throw new Error("polyloop must have length >= 3")
  }

  const isBitesized = (midNode) => {
    /*
          mid          
          / \         
      l  / V \  r
        /angle\
       /       \
     left-----right
     
      chunky enough:
        * (169 deg) -0.95 <= cos(angle) <= 0.99 (8 deg)
        * sideRatio <= 10
    */

    // l.r == |l|*|r|*cos(m) == cos(m) -- l,r are normalized
    const cosAngle = midNode.l.dot(midNode.r)
    const sideRatio = Math.max(midNode.lLength, midNode.rLength)
      / Math.min(midNode.lLength, midNode.rLength)

    // console.log("midNode:", midNode)
    // console.log("cosAngle:", cosAngle, "sideRatio:", sideRatio)

    return -0.95 <= cosAngle && cosAngle <= 0.99 && sideRatio <= 100
  }

  const isPointInside = (p, midNode) => {
    /*
           mid          
           / \         
        u /   \ v  
      l  /\   /\  r
        /   p   \
      left-----right

      u < 0 | v < 0 => point above mid
      u + v > 1     => point below left-----right
    */
    const u = p.dot(midNode.l) // projection of p on l
    const v = p.dot(midNode.r) // projection of p on r

    return u >= 0 && v >= 0 && (u + v) <= 1
  }

  const calculateLR = (midNode) => {
    const l = midNode.l
    const r = midNode.r
    l.copy(midNode.prev.value).sub(midNode.value)
    r.copy(midNode.next.value).sub(midNode.value)
    midNode.lLength = l.length()
    midNode.rLength = r.length()
    l.divideScalar(midNode.lLength)
    r.divideScalar(midNode.rLength)
    // console.log("lr", midNode)
  }

  const componentsFromPoly = (i) => [
    vertices[polyloop[i] + 0], vertices[polyloop[i] + 1], vertices[polyloop[i] + 2]
  ]

  let head = null
  let curr = null
  // project 3D vertices into polyloop's 2D plane
  // form a chain with results for quick deletion
  {
    const unitX = new tjs.Vector3()
    const unitY = new tjs.Vector3()
    const mid = new tjs.Vector3()
    {
      // use first triangle
      mid.set(...componentsFromPoly(1))
      unitY.set(...componentsFromPoly(0)).sub(mid) // left vertex
      unitX.set(...componentsFromPoly(2)).sub(mid) // right vertex
      // console.log("prenormal", "unitX", unitX, "unitY", unitY, "mid", mid)

      // build perpendicular axis with cross product
      unitX.normalize()
      const normal = new tjs.Vector3().crossVectors(unitX, unitY).negate()
      unitY.crossVectors(unitX, normal).normalize()
    }
    // console.log("unitX", unitX, "unitY", unitY)

    const sentinel = {}
    curr = sentinel

    // console.log("polyloop.length:", polyloop.length)
    for (const i in polyloop) {
      mid.set(...componentsFromPoly(i))

      curr.next = {
        value: new tjs.Vector2(mid.dot(unitX), mid.dot(unitY)),
        index: polyloop[i],
        prev: curr,
        next: null,
        l: new tjs.Vector2(), lLength: null,
        r: new tjs.Vector2(), rLength: null,
      }
      curr = curr.next
      // console.log("created", mid, "at", curr.value)
    }

    // complete the chain
    head = sentinel.next
    curr.next = head
    head.prev = curr

    // reset to first node
    curr = head
    do {
      // cache l and r vectors since they used many times
      calculateLR(curr)
      // console.log("l:", curr.l, "r:", curr.r)
      curr = curr.next
    } while (curr !== head)

  }

  const popNode = (node) => {
    node.prev.next = node.next
    node.next.prev = node.prev
  }

  const isViable = (midNode) => {
    /*
      is convex:
        * signedArea > 0
      has no points inside 
    */

    const mid = midNode.value
    const left = midNode.prev.value
    const right = midNode.next.value
    // assumes clockwise direction left > mid > right
    // the magnitude is not needed, only its sign
    const signedArea = (mid.x - right.x) * (left.y - mid.y)
      - (left.x - mid.x) * (mid.y - right.y) // * 0.5

    // console.log("signedArea", signedArea)
    if (signedArea >= 0) return false // FIXME: flip two signs to check negative

    let curr = midNode
    do {
      // TODO: maybe sort by X/Y and check bounding box first
      if (curr !== midNode && curr !== midNode.prev
        && curr !== midNode.next && isPointInside(curr.value, midNode)) {
        // console.log("point inside", curr.value)
        return false
      }
      curr = curr.next
    } while (curr !== midNode);

    return true
  }

  const triangleIndexes = []

  let analyticsSteps = 0
  const analyticsSteps_MAX = polyloop.length * polyloop.length

  curr = head
  // should be O(n)-ish
  while (curr.next.next !== curr.prev) { // more than one triangle

    let noTrianglesFound = true
    const startedAt = curr
    do { // do the loop once
      // console.log("step",analyticsSteps)
      analyticsSteps++
      if (analyticsSteps > analyticsSteps_MAX) {
        throw new Error("this smells like an infinite loop edge case")
      }

      if (isBitesized(curr) && isViable(curr)) {
        triangleIndexes.push(curr.prev.index, curr.index, curr.next.index)
        popNode(curr)
        calculateLR(curr.prev)
        calculateLR(curr.next)
        noTrianglesFound = false
        break
      }

      curr = curr.next
    } while (curr !== startedAt);

    curr = curr.prev

    if (noTrianglesFound) {
      return triangleIndexes
      throw Error("no isBitesized triangles found")
    }

  }
  // push the last remaining triangle
  triangleIndexes.push(curr.prev.index, curr.index, curr.next.index)

  console.log("N:", polyloop.length, " steps:", analyticsSteps, " ratio: ", analyticsSteps / polyloop.length)

  return triangleIndexes
}

export default triangulatePotato