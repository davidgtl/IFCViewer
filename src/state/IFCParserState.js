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
            FACE
    */

    // gather metrics to allocate buffers
    const pointCount = (this.fileContent.match(/#.*?POINT/g) || []).length;
    console.log("pointCount: ", pointCount);

    const faceCount = (this.fileContent.match(/#.*?FACE/g) || []).length;
    console.log("faceCount: ", faceCount);

    const polyloopCount = (this.fileContent.match(/#.*?POLYLOOP/g) || []).length;
    console.log("polyloopCount: ", polyloopCount);

    this.points = new Float32Array(pointCount * 3) // check: always 3D points?
    this.faces = null

    triangleIndexes.push(...triangulatePotato(this.points, polyloopIndexes))

    geometryCustom.setIndex(triangleIndexes);
    geometryCustom.setAttribute('position', new tjs.BufferAttribute(vertices, 3));

    const materialCustom = new tjs.MeshBasicMaterial({ color: 0xCC5511 });
    const mesh = new tjs.Mesh(geometryCustom, materialCustom);
    this.scene.add(mesh)

  }

}

export default IFCParserState