import { makeObservable } from "mobx"
import RenderState from "./RenderState"
import IFCParserState from "./IFCParserState"
import OBJParserState from "./OBJParserState"
import svgs from "@/components/svgs"

class RootState {
  constructor() {
    
    // const allSymbols = {
    //   focusObject: "assets/symbols/focusObject.svg"
    // }
    console.log(svgs)
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