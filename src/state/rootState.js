import { makeObservable, autorun, observable, action, computed } from "mobx"
import { ACTION, hsTrack } from "./history"
import fn from "@/fn"
import RenderState from "./RenderState"
import IFCParserState from "./IFCParserState"
import OBJParserState from "./OBJParserState"
import UIState from "./UIState"

class RootState {
  constructor() {

    this.actions = {}
    this.render = new RenderState(this)
    this.ifcParser = new IFCParserState(this)
    this.objParser = new OBJParserState(this)
    this.ui = new UIState(this)
    this.count = 0

    this.registerModule(this, this, {
      actions: {
        loadLucySample: {
          symbolName: null,
        },
        loadInstituteSample: {
          symbolName: null,
        },
        loadHausSample: {
          symbolName: null,
        },
        loadChurchSample: {
          symbolName: null,
        }
      },
      props: {
        count: {
          symbolName: null,
        }
      }
    })
  }

  registerModule(parent, target, specs) {
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
            name: "Name in UI",
            // default: deCamelize(actionName)

            /* use the symbol under asserts/symbols/actionName.svg */
            symbolName: "someOtherName",
            // default: actionName; null to ommit

            /* check history.js options */
            history: {},
            // default: null 

            /* Used to update state without tracking history, small, fast, preview updates */
            onPreview: (...params) => this.doActionPreview(params),
            // default: 
            //  history != null: target.actionName.trackWith({ isOverwrite: true })(...params), 
            //  history == null: (...params) => target.actionName(...params), 

            /* The final update e.g. onMouseUp, onFocusOut. Has the same params as the last onPreview */
            onDone: (...params) => this.doAction(params),
            // default: 
            //  history != null: (...params) => target.actionName(...params)
            //  history == null: (...params) => func.apply(target, params)

            // TODO: add keybindings

            /* Will generate children values which will be passed as params */
            params: {

              /* params = onInit() */
              onInit: () => [0, { value: 1337 }, 2, 3],
              // default: [undefined, ..., undefined] 

              paramName: {

                /* set params passed to onPreview/onDone */
                argSetter: (params, value) => params[2].a.b.c = value,
                // default: (...) => params[paramNameIndex] = value

                /* show invaid UI if false, don't call onPreview/onDone/preprocess*/
                validator: (value) => value > 5,
                // default: (value) => true

                /* UI message */
                invalidMessage: (value) => `${value} should be larger than 5`,
                // default: (value) => "Invalid"

                /* map the parameter before onPreview/onDone */
                preprocess: (value) => Math.abs(value)
                // default: (value) => value
              }
            }
          }
        },

        /*
          Property: value <=> UI
          why?: keep code locality, autogenerate UI
          context: Each state object can have read/write(only) props.
                   The property can be passed to a DynPanel to be 
                   materialized into Dyn* components
        */
        props: {
          propName: {
            name: "Name in UI", // default: deCamelize(propName)

            /* use the symbol under asserts/symbols/propName.svg */
            symbolName: "someOtherName", // default: propName; null to ommit
          }
        }
      })
    })

    const deCamelize = (name) => {
      let first = name.match(/^[a-z]+/g)[0]
      first = first[0].toUpperCase() + first.substring(1)
      const rest = name.match(/[A-Z][a-z]+/g)
      if (rest !== null) {
        return [first, ...rest].join(" ")
      } else {
        return [first]
      }
    }

    const mobxArgs = {}
    const hsTrackArgs = {}

    const actions = specs.actions
    for (const actName in actions) {
      const act = actions[actName]
      const func = target[actName]

      fn.defaultsFor(act, {
        name: deCamelize(actName),
        history: null,
        symbolName: actName,
        symbolId: act.symbolName === null ? null : `#symbol_${act.symbolName ?? actName}`,
        onPreview: fn.condShort(
          [act.history !== null, (...params) => func.trackWith({ isOverwrite: true })(...params)],
          [true, (...params) => func.apply(target, params)]
        ),
        onDone: fn.condShort(
          [act.history !== null, (...params) => func.apply(target, params)],
          [true, (...params) => func.apply(target, params)]
        ),
      })

      mobxArgs[actName] = action
      hsTrackArgs[actName] = ACTION
    }
    target.actions = actions

    const props = specs.props
    for (const propName in props) {
      const prop = props[propName]

      fn.defaultsFor(prop, {
        name: deCamelize(propName),
        history: null,
        symbolName: propName,
        symbolId: prop.symbolName === null ? null : `#symbol_${prop.symbolName ?? propName}`,
        onToggle: false,
        value: target[propName]
      })

      makeObservable(prop, { value: true })

      prop.onToggle = fn.condShort(
        [prop.onToggle === true, action(() => {
          prop.value = !target[propName]
        })],
        [prop.onToggle !== undefined, prop.onToggle],
        [true, () => undefined]
      )

      autorun(() => target[propName] = prop.value)

      // hsTrackArgs[propName] = PROPERTY
    }
    target.props = props

    makeObservable(target, mobxArgs)
    hsTrack(target, hsTrackArgs)
  }

  loadLucySample() {
    this.objParser.loadFromURL("./samples/lucy.obj")
  }
  loadInstituteSample() {
    this.ifcParser.loadFromURL("./samples/AC20-Institute-Var-2.ifc")
  }
  loadHausSample() {
    this.ifcParser.loadFromURL("./samples/AC20-FZK-Haus.ifc")
  }
  loadChurchSample() {
    this.objParser.loadFromURL("./samples/20221025SantAntiniDelAbad_Llombay1M_CC0.obj")
  }

  saveState(){
    window.localStorage.setItem('state', JSON.stringify(showBanner))
  }
  loadState(){
    JSON.parse(window.localStorage.getItem('state', (showBanner)))
  }
}

const rootState = new RootState()
export default rootState