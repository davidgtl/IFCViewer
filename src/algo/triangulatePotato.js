import * as tjs from 'three'

/**
  Chop polygon into non-thin triangles
  -- similar to earcut, but greedy
*/
function triangulatePotato(vertices, polyloop) {

  if (polyloop.length < 3) {
    throw new Error("polyloop must have length >= 3")
  }

  bitesizedMetric = (left, mid, right) => {
    /*
          mid          
          / \         
      l  / V \  r
        /angle\
       /       \
     left-----right
    
      chunky -- 0 <= cos^2(angle) <= 1  -- skinny
      chunky -- 1 <= ratio(l, r)  <= 5+ -- skinny
    */
    const l = left.copy().sub(mid)
    const r = right.copy().sub(mid)

    const l2 = l.dot(l) // |l| |l|
    const r2 = r.dot(r) // |r| |r|
    const lr = l.dot(r) // |l| |r| cos(m)

    // assumes direction left > mid > right
    const concavePenalty = lr < 0 ? Number.MAX_VALUE : 0

    const cos2Angle = (lr * lr) / (l2 * r2)
    const sideRatio = Math.max(l2, r2) / Math.min(l2, r2)

    // combine on same scale
    return concavePenalty + cos2Angle + (sideRatio - 1) * 0.05
  }

  // convert polyloop to a looping linked list
  const sentinel = {}
  let curr = sentinel

  for (const i in polyloop) {
    curr.next = {
      index: polyloop[i],
      prev: curr
    }
    curr = curr.next
  }

  // complete the chain
  const head = sentinel.next
  curr.next = head
  head.prev = curr
  // reset to first node
  curr = head

  let loopLength = polyloop.length
  const popNode = (node) => {
    node.prev.next = node.next
    node.next.prev = node.prev
    loopLength--
    return node.next
  }


  const triangleIndexes = []
  var decentStandard = 0.6 // looks nice

  let steps = 0
  // should be O(n)-ish
  while (loopLength > 3) {

    let bestChunk = curr
    let bestChunkValue = 1000

    do { // do the loop once
      if (loopLength == 3) {
        triangles.push(...polyloop)
        break
      }

      const chunkValue = bitesizedMetric(
        vertices[curr.prev.index],
        vertices[curr.index],
        vertices[curr.next.index]
      )

      if (chunkValue <= decentStandard) {
        triangles.push(curr.prev.index, curr.index, curr.next.index)
        curr = popNode(curr)
      }

      if (chunkValue < bestChunkValue) {
        bestChunkValue = chunkValue
        bestChunk = curr
      }

      steps++
    } while (curr !== head);

    if (bestChunkValue > decentStandard) {
      // not very nice polygon, lower standards
      decentStandard = bestChunkValue
      // pick the best found
      triangles.push(curr.prev.index, curr.index, curr.next.index)
      // start next iteration from its previous node 
      // to check the newly triangle
      curr = popNode(curr).prev
    }

  }
  // push the last remaining triangle
  triangles.push(curr.prev.index, curr.index, curr.next.index)

  console.log("N:", polyloop.length, " steps:", steps, " ratio: ", steps / polyloop.length)

  return triangleIndexes
}

export default triangulatePotato