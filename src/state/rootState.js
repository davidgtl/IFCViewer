import { makeObservable, autorun, observable } from "mobx"
import RenderState from "./RenderState"
import IFCParserState from "./IFCParserState"
import OBJParserState from "./OBJParserState"
import svgs from "@/components/svgs"
import fn from "@/fn"

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
    this.someText = "testing the text"

    autorun(() => console.log("someText:", this.someText))
  }

  registerModule(target, specs) {
    fn.codeDoc(() => {
      root.registerModule(this, {
        name: "nameInUI", // default: the class name in camelCase -- myObj.constructor.name

        /*
          Action: (...params?) => something happens
          why?: keep code locality, autogenerate UI
          context: Each state object can have actions modifying it.
                   The action can be passed to a DynPanel to be 
                   materialized into Dyn* components.
        */
        actions: {
          actionName: {
            name: "Name in UI",
            // Used to update state without tracking history, small, fast, preview updates
            onPreview: (...params) => this.someInternalAction.trackWith({ isOverwrite: true })(...params),
            // The final update e.g. onMouseUp, onFocusOut. Has the same params as the last onPreview
            onDone: (...params) => this.someInternalAction(...params),
            // Will generate children values which will be passed as params
            params: {
              onInit: () => [0, { value: 1337 }, 2, 3], // constructor for params
              paramName: {
                argPos: 2,                // params[argPos]          = paramName, default: null(don't pass)
                argPath: ['a', 'b', 'c'], // params[argPos][a][b][c] = paramName, default: null(just argPos)
                validator: (value) => value > 5, // show invaid UI if false, don't call onPreview/onDone/preprocess
                invalidMessage: (value) => `${value} should be larger than 5`, // UI message
                preprocess: (value) => Math.abs(value) // map the parameter before onPreview/onDone
              }
            }
          }
        },
        /*
          Property: value <=> UI
          why?: keep code locality, autogenerate UI
          context: Each state object can have read/write(only) properties.
                   The property can be passed to a DynPanel to be 
                   materialized into Dyn* components
        */
        properties: {
          propName: {
            onInit: () => 1337, // constructor for params
          }
        }
      })
    })

    //FIXME: this doesn't preserve state hierachy
    // maybe add it as meta to the function itself?

    const deCamelize = (name) => {
      let first = name.match(/^[a-z]+/g)[0]
      return [
        first[0].toUpperCase() + first.substring(1),
        ...name.match(/[A-Z][a-z]+/g)
      ].join(" ")
    }
    mobxArgs = {}

    for (const actName in specs.actions) {
      // provide defaults
      this.actions[actName] = {
        tick: () => target[actName].call(target),
        name: deCamelize(actName),
        symbolId: `#symbol_${actName}`
      }
      // overwrite if field is set
      for (const field in specs.actions[actName]) {
        this.actions[actName][field] = actions[actName][field]
      }

      mobxArgs[actName] = action
    }

    for (const propName in specs.properties) {
      // provide defaults
      this.properties[propName] = {
        tick: () => target[propName].call(target),
        name: dePascalize(propName),
        symbolId: `#symbol_${propName}`
      }
      // overwrite if field is set
      for (const field in specs.actions[propName]) {
        this.actions[propName][field] = actions[propName][field]
      }

      mobxArgs[propName] = observable
    }

    makeObservable(target, mobxArgs)
  }

  tick() {
    this.render.render()
  }
}

const rootState = new RootState()
export default rootState