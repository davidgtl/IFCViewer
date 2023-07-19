import { makeObservable, autorun, observable, action } from "mobx"
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
      root.registerModule(parent, this, {
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
            name: "Name in UI", // default: deCamelize(actionName)
            /* use the symbol under asserts/symbols/actionName.svg */
            symbolName: "someOtherName", // default: actionName; null to ommit
            /* Used to update state without tracking history, small, fast, preview updates */
            onPreview: (...params) => this.someInternalAction.trackWith({ isOverwrite: true })(...params),
            /* The final update e.g. onMouseUp, onFocusOut. Has the same params as the last onPreview */
            onDone: (...params) => this.someInternalAction(...params),
            /* Will generate children values which will be passed as params */
            params: {
              /* params = onInit() */
              onInit: () => [0, { value: 1337 }, 2, 3],
              paramName: {
                /* set params passed to onPreview/onDone */
                argSetter: (params, value) => params[2].a.b.c = value, // default: (...) => params[paramNameIndex] = value
                /* show invaid UI if false, don't call onPreview/onDone/preprocess*/
                validator: (value) => value > 5, // default: (value) => true
                /* UI message */
                invalidMessage: (value) => `${value} should be larger than 5`, // defaut: (value) => "Invalid"
                /* map the parameter before onPreview/onDone */
                preprocess: (value) => Math.abs(value) // default: (value) => value
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
            name: "Name in UI", // default: deCamelize(propName)
            /* use the symbol under asserts/symbols/propName.svg */
            symbolName: "someOtherName", // default: propName; null to ommit
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
    const mobxArgs = {}

    const actions = specs.actions
    for (const actName in actions) {
      const act = actions[actName]
      
      fn.defaultsFor(act, {
        tick: () => target[actName].call(target),
        name: deCamelize(actName),
        symbolName: actName,
        symbolId: `#symbol_${act.symbolName}`
      })

      mobxArgs[actName] = action
    }   
    
    const properties = specs.properties
    for (const propName in properties) {
      const prop = properties[propName]
      
      fn.defaultsFor(prop, {
        name: deCamelize(actName),
        symbolName: actName,
        symbolId: `#symbol_${act.symbolName}`
      })

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