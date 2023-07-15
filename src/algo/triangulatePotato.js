import * as tjs from 'three'

/**
  Chop polygon into non-thin triangles
  -- similar to earcut, but greedy
  @param vertices - array of individual x,y,z coordinates
  @param polyloop - array of indexes into vertices (divided by 3),
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

    return signedArea > 0 && -0.95 <= cosAngle && cosAngle <= 0.99 && sideRatio <= 10
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
  }


  let head = null
  let curr = null
  // project 3D vertices into polyloop's 2D plane
  // form a chain with results for quick deletion
  {
    const unitX = new tjs.Vector3()
    const unitY = new tjs.Vector3()
    {
      const mid = new tjs.Vector3(vertices[3], vertices[4], vertices[5])
      unitY.set(vertices[0], vertices[1], vertices[2]).sub(mid) // left vertex
      unitX.set(vertices[6], vertices[7], vertices[8]).sub(mid) // right vertex

      // build perpendicular axis with cross product
      unitX.normalize()
      const normal = new tjs.Vector3().crossVectors(unitX, unitY)
      unitY.crossVectors(unitX, normal).normalize()
    }

    const sentinel = {}
    curr = sentinel

    for (const i in polyloop) {
      const index = polyloop[i] * 3
      mid.set(vertices[index + 0], vertices[index + 1], vertices[index + 2])

      curr.next = {
        value: new tjs.Vector2(mid.dot(unitX), mid.dot(unitY)),
        index: polyloop[i],
        prev: curr,
        next: null,
        l: new tjs.Vector2(), lLength: null,
        r: new tjs.Vector2(), rLength: null,
      }
      curr = curr.next
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

    // assumes clockwise direction left > mid > right
    // the magnitude is not needed, only its sign
    const signedArea = (mid.x - right.x) * (left.y - mid.y)
      - (left.x - mid.x) * (mid.y - right.y) // * 0.5

    if (signedArea <= 0) return false

    let curr = head
    do {
      // TODO: maybe sort by X/Y and check bounding box first
      if (isPointInside(curr.value, midNode)) {
        return false
      }
      curr = curr.next
    } while (curr !== head);

    return true
  }

  const triangleIndexes = []

  let analyticsSteps = 0
  const analyticsSteps_MAX = polyloop.length * polyloop.length

  curr = head
  // should be O(n)-ish
  while (curr.next.next !== curr.prev) { // more than one triangle

    noTrianglesFound = true
    const startedAt = curr
    do { // do the loop once
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
      throw Error("no isBitesized triangles found")
    }

  }
  // push the last remaining triangle
  triangleIndexes.push(curr.prev.index, curr.index, curr.next.index)

  console.log("N:", polyloop.length, " steps:", analyticsSteps, " ratio: ", analyticsSteps / polyloop.length)

  return triangleIndexes
}

export default triangulatePotato