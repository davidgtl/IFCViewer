import { makeObservable, action, autorun, reaction } from "mobx"
import * as tjs from 'three'
import { clampCircular, TAU, TAU4 } from "@/mathUtils"
import { ACTION, hsTrack } from "./history"

class OBJParserState {

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
    const pointCount = (this.fileContent.match(/v/g) || []).length;
    console.log("v: ", pointCount);

    const faceCount = (this.fileContent.match(/f/g) || []).length;
    console.log("f: ", faceCount);

    this.points = new Float32Array(pointCount * 3) // check: always 3D points?

    //TODO: replace regexes with event emmitters and handlers for IFC*
    let i = 0
    for (const pointGroups of this.fileContent.matchAll(/^v (.*?) (.*?) (.*?)$/gm)) {
      this.points[i] = parseFloat(pointGroups[1])
      this.points[i + 1] = parseFloat(pointGroups[2])
      this.points[i + 2] = parseFloat(pointGroups[3])
      // console.log("POINT:", pointGroups[1], this.points[i], this.points[i+1],this.points[i+2])
      i += 3
    }

    this.faces = []

    const center = new tjs.Vector3()
    const tmp = new tjs.Vector3()
    for (const faceGroups of this.fileContent.matchAll(/^f (.*?) (.*?) (.*?)$/gm)) {
      let components = faceGroups.slice(1, 4).map(x => parseInt(x))
      center.add(tmp.set(components))
      components = components.map(x => x - 1) // objs indexes start from 1
      this.faces.push(...components)
    }

    center.divideScalar(pointCount)

    console.log("loaded", this.faces.length, "indexes")

    const geometryCustom = new tjs.BufferGeometry()
    console.log(this.points)
    console.log(this.faces)
    geometryCustom.setIndex(this.faces)
    geometryCustom.setAttribute('position', new tjs.BufferAttribute(this.points, 3))
    geometryCustom.computeVertexNormals()

    const materialCustom = new tjs.MeshLambertMaterial({ color: 0xCC5511 })//side: tjs.DoubleSide
    const mesh = new tjs.Mesh(geometryCustom, materialCustom);
    this.root.render.scene.add(mesh)

    this.root.render.focusObject()


  }

}

export default OBJParserState