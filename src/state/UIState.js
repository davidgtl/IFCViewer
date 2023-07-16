import { makeObservable, action, autorun, reaction } from "mobx"
import * as tjs from 'three'
import { clampCircular, TAU, TAU4 } from "@/mathUtils"
import { ACTION, hsTrack } from "./history"
import triangulatePotato from "@/algo/triangulatePotato"

class UIState {

  constructor(root) {
    this.root = root

   

    makeObservable(this, {
      fileContent: true,
      loadFromURL: true,
      processContent: true,
    })

    // parser chain
    reaction(() => this.fileContent, () => this.processContent())
  }

}

export default UIState