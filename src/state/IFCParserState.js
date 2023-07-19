import { makeObservable, action, autorun, reaction } from "mobx"
import * as tjs from 'three'
import { clampCircular, TAU, TAU4 } from "@/mathUtils"
import { ACTION, hsTrack } from "./history"
import triangulatePotato from "@/algo/triangulatePotato"

class IFCParserState {

  constructor(root) {
    this.root = root

    this.fileContent = null
    this.points = null
    this.faces = null
    this.count = 0

    makeObservable(this, {
      fileContent: true,
      loadFromURL: true,
      processContent: true,
    })

    // parser chain
    reaction(() => this.fileContent, () => this.processContent())
  }

  loadFromURL(url) {
    var request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.responseType = "text";

    request.onload = action(() => {
      this.fileContent = request.responseText
    })
    request.send()
  }

  processContent() {
    console.log("processing file:", this.fileContent)

    /*
      the structure (IFCNAME_HERE):
      CARTESIANPOINT #m => 
        POLYLOOP =>
          FACEOUTERBOUND =>
            FACE =>
              IFCCLOSEDSHELL
    */

    // gather metrics to allocate buffers
    // TODO: merge into single loop with switch
    const pointCount = (this.fileContent.match(/#.*?POINT/g) || []).length;
    console.log("pointCount: ", pointCount);

    const faceCount = (this.fileContent.match(/#.*?FACE/g) || []).length;
    console.log("faceCount: ", faceCount);

    const polyloopCount = (this.fileContent.match(/#.*?POLYLOOP/g) || []).length;
    console.log("polyloopCount: ", polyloopCount);

    this.points = new Float32Array(pointCount * 3) // check: always 3D points?

    //TODO: replace regexes with event emmitters and handlers for IFC*
    const pointIdToIndex = {}
    let i = 0
    for (const pointGroups of this.fileContent.matchAll(/^#(\d+)=\s?IFCCARTESIANPOINT\(\((.*?),(.*?),(.*?)\)\);$/gm)) {
      pointIdToIndex[pointGroups[1]] = i
      this.points[i] = parseFloat(pointGroups[2])
      this.points[i + 1] = parseFloat(pointGroups[3])
      this.points[i + 2] = parseFloat(pointGroups[4])
      // console.log("POINT:", pointGroups[1], this.points[i], this.points[i+1],this.points[i+2])
      i += 3
    }

    this.faces = []

    for (const polyloopGroups of this.fileContent.matchAll(/^#(\d+)=\s?IFCPOLYLOOP\(\((.*?)\)\);$/gm)) {
      const polyloopIndexes = []
      for (const pointIndexGroups of polyloopGroups[2].matchAll(/#(\d+)/g)) {
        const vertexIndex = pointIdToIndex[pointIndexGroups[1]]
        polyloopIndexes.push(vertexIndex)
        console.log("POLY", polyloopGroups[1], "POINT:", pointIndexGroups[1], "vertexIndex", vertexIndex, this.points[vertexIndex], this.points[vertexIndex + 1], this.points[vertexIndex + 2])
      }
      this.faces.push(...triangulatePotato(this.points, polyloopIndexes))
    }

    console.log("loaded", this.faces.length, "indexes")

    const geometryCustom = new tjs.BufferGeometry()
    console.log(this.faces)
    geometryCustom.setIndex(this.faces)
    geometryCustom.setAttribute('position', new tjs.BufferAttribute(this.points, 3))

    const materialCustom = new tjs.MeshLambertMaterial({ color: 0xCC5511, side: tjs.DoubleSide })
    const mesh = new tjs.Mesh(geometryCustom, materialCustom)
    this.root.render.scene.add(mesh)
    this.root.render.focusObject()

    //#31465 wall with window holes
  }

}

export default IFCParserState