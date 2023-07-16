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
    this.actions = {}
    this.render = new RenderState(this)
    this.ifcParser = new IFCParserState(this)
    this.objParser = new OBJParserState(this)
    this.count = 0

    makeObservable(this, {
      count: true
    })
  }

  registerActions(target, actions) {
    //FIXME: this doesn't preserve state hierachy
    // maybe add it as meta to the function itself?

    const dePascalize = (name) => {
      let first = name.match(/^[a-z]+/g)[0]
      return [first[0].toUpperCase() + first.substring(1), ...name.match(/[A-Z][a-z]+/g)].join(" ")
    }

    for (const actName in actions) {
      // provide defaults
      this.actions[actName] = {
        tick: () => target[actName].call(target),
        name: dePascalize(actName),
        symbolId: `#symbol_${actName}`
      }
      // overwrite if field is set
      for (const field in actions[actName]) {
        this.actions[actName][field] = actions[actName][field]
      }
    }
  }

  tick() {
    this.render.render()
  }
}

export default RootState