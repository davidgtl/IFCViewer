import { makeObservable } from "mobx"
import RenderState from "./RenderState"

class RootState {
  constructor() {
    
    this.render = new RenderState(this)
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