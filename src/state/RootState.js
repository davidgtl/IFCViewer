import { makeObservable } from "mobx"
import RenderState from "./RenderState"
import IFCParserState from "./IFCParserState"
import OBJParserState from "./OBJParserState"

class RootState {
  constructor() {
    
    this.render = new RenderState(this)
    this.ifcParser = new IFCParserState(this)
    this.objParser = new OBJParserState(this)
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