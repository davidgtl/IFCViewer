import { makeAutoObservable } from "mobx"
import RenderState from "./RenderState"

class RootState {
  count = 0
  render
  constructor() {
    this.render = new RenderState(this)
    makeAutoObservable(this, { render: false })
  }

  tick() {
    this.count++
    this.render.render()
  }
}

export default RootState