import { makeObservable, action } from "mobx"
import * as tjs from 'three'
import { clampCircular, TAU, TAU4 } from "@/mathUtils"
import { ACTION, hsTrack } from "./history"

class IFCParserState {

  constructor(root) {
    this.root = root

    this.fileContent = null

    makeObservable(this, {
      fileContent: true,
      loadFromURL: true
    })

    // this.history = hsTrack(this, {
    //   updateCamAngle: ACTION
    // })

    // initialize history with current value
    // this.updateCamAngle.trackWith({ isCall: false })(this.cameraAngle.x, this.cameraAngle.y)

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

}

export default IFCParserState