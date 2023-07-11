import { makeObservable } from "mobx"
import RenderState from "./RenderState"
import UIState from "./UIState"

class RootState {
  constructor() {
    
    this.render = new RenderState(this)
    this.ui = new UIState(this)

    this.count = 0

    makeObservable(this, {
      count: true
    })
  }

  tick() {
    this.render.render()
  }
}

export default RootState