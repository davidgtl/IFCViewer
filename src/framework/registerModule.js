import fn from "@/fn"
import hs from "@/framework/history"
import { makeObservable, autorun, observable, action, computed } from "mobx"

function registerModule(root, parent, target, specs) {

  fn.codeDoc(() => {
    registerModule(root, parent, this, {
      name: "nameInUI", // default: the class name in camelCase -- myObj.constructor.name

      $inherited: [
        /**
        *  inherit properties and actions from moduleName
        *  
        * @example
        *  get(thing): return moduleName[thing] if thing not in this 
        *  set(thing, value): this[thing] = value 
        */
        { from: moduleName }
      ],

      /**
      *  Action: (...params?) => something happens
      *  why?: keep code locality, autogenerate UI
      *  context: Each state object can have actions modifying it.
      *           The action can be passed to a DynPanel to be 
      *           materialized into Dyn* components.
      */
      actions: {
        actionName: {
          /**
          *  use the symbol under {@link asserts/symbols/actionName.svg}
          * @default deCamelize(actionName)
          */
          name: "Name in UI",

          /**
          *  use the symbol under asserts/symbols/actionName.svg
          * @default actionName; null to ommit
          */
          symbolName: "someOtherName",

          /**
          * @see history.js options
          * @default null
          */
          history: {},

          /**
          *  Used to update state without tracking history, small, fast, preview updates
          * 
          * @default
          *  .history != null: target.actionName.trackWith({ isOverwrite: true })(...params), 
          *  .history == null: (...params) => target.actionName(...params), 
          */
          onPreview: (...params) => this.doActionPreview(params),

          /**
          *  The final update e.g. onMouseUp, onFocusOut. Has the same params as the last onPreview
          * @default (...params) => target.actionName(...params)
          */
          onDone: (...params) => this.doAction(params),

          // TODO: add keybindings

          /* Will generate children values which will be passed as params */
          params: {
            /**
            * @summary
            *  params = onInit()
            * 
            * @default () => []
            */
            onInit: () => [0, { value: 1337 }, 2, 3],

            paramName: {

              /**
              * set params passed to onPreview/onDone
              * @default (...) => params[paramNameIndex] = value
              */
              argSetter: (params, value) => params[2].a.b.c = value,

              /**
              * show invaid UI if false, don't call onPreview/onDone/preprocess
              * @default (value) => true
              */
              validator: (value) => value > 5,

              /**
              *  UI message
              * @default (value) => "Invalid"
              */
              invalidMessage: (value) => `${value} should be larger than 5`,

              /**
              *  map the parameter before onPreview/onDone
              * @default  (value) => value
              */
              preprocess: (value) => Math.abs(value)
            }
          }
        }
      },

      /**
      *  Property: value <=> UI
      *  why?: keep code locality, autogenerate UI
      *  context: Each state object can have read/write(only) props.
      *           The property can be passed to a DynPanel to be 
      *           materialized into Dyn* components
      */
      props: {
        propName: {
          /**
          * @default deCamelize(propName)
          */
          name: "Name in UI",

          /**
          *  use the symbol under {@link asserts/symbols/propName.svg}
          * @default:  propName; null to ommit
          */
          symbolName: "someOtherName",
        }
      }
    })
  })

  /**
  * @example
  *  "deCamelize" => "De Camelize"
  */
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

  const resultingModule = {}

  if ("$inherited" in specs) {
    fn.inheritFrom(resultingModule, specs.$inherited[0].from)
  }

  const actions = specs.actions
  for (const actName in actions) {
    const act = actions[actName]
    const func = target[actName]

    act.action = act.history != null
      ? hs.trackAction(target, (...params) => func.apply(target, params))
      : action((...params) => func.apply(target, params))

    fn.defaultsFor(act, {
      name: deCamelize(actName),
      history: null,
      symbolName: actName,
      symbolId: act.symbolName === null ? null : `#symbol_${act.symbolName ?? actName}`,
      onPreview: fn.condShort(
        [act.history != null, (...params) => act.action.trackWith({ isOverwrite: true })(...params)],
        [true, (...params) => act.action(...params)]
      ),
      onDone: (...params) => act.action(...params),
    })

    resultingModule[actName] = act
  }

  const props = specs.props ?? {}
  for (const propName in props) {

    const prop = {
      ...props[propName],
      /* getters and setters to save the last known value */
      // TODO: hook history.js track property here
      _obs: target[propName],
      get obs() { return this._obs },
      set obs(value) {
        const valueOld = target[propName]
        prop.onUpdate(value, valueOld)
        target[propName] = value
        this._obs = value
      },
    }

    fn.defaultsFor(prop, {
      name: deCamelize(propName),
      history: null,
      symbolName: propName,
      symbolId: prop.symbolName === null ? null : `#symbol_${prop.symbolName ?? propName}`,
      onToggle: false,
      onUpdate: () => { },
    })

    // provide untracked .value proxy to match tracked .obs
    // because mobx's _value(= last known value) is quite hidden
    Object.defineProperty(prop, "value", {
      get() {
        return target[propName]
      },
      set(value) {
        target[propName] = value
      }
    })

    makeObservable(prop, {
      _obs: observable
    })

    prop.onToggle = fn.condShort(
      [prop.onToggle === true, action(() => {
        prop.value = !prop.value
      })],
      [prop.onToggle !== undefined, prop.onToggle],
      [true, () => undefined]
    )

    /* TODO: track properties too */
    // const hsTrackArgs = {}
    // hsTrackArgs[propName] = hs.PROPERTY
    // hs.track(act, hsTrackArgs)
    resultingModule[propName] = prop
  }

  const comps = specs.comps
  for (const compName in comps) {
    const comp = comps[compName]
    const func = target[compName]

    fn.defaultsFor(comp, {
      name: deCamelize(compName),
      history: null,
      symbolName: compName,
      symbolId: comp.symbolName === null ? null : `#symbol_${comp.symbolName ?? compName}`,
      onToggle: false,
      obs: (...params) => func.apply(target, params),
      onUpdate: () => { },
    })

    // makeObservable(comp, {
    //   obs: computed
    // })

    resultingModule[compName] = comp
  }


  // null is root sentinel 
  resultingModule.root = root ?? resultingModule


  const children = specs.children
  for (const childName in children) {
    const childClass = children[childName]

    resultingModule[childName] =
      (new childClass(resultingModule.root, resultingModule))._module
  }

  resultingModule._target = target

  return resultingModule
}

export default registerModule