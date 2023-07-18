
import fn from "@/fn";


const ACTION = { tag: "action" }
const VALUE = { tag: "value" }

class ActionHistory {
  /*
    Capture calls of an action, link them in a tree
    For call-level options granularity:
     
      action.trackWith({...options})(...args)

  */
  constructor(target, func) {
    this.root = {
      prevs: [],
      nexts: [],
    }
    this.func = func
    this.target = target
    this.pointer = this.root
  }

  record(args) {
    var node = {
      nexts: [],
      prevs: [this.pointer],
      args: args
    }
    this.pointer.nexts.push(node)
    this.pointer = node
  }

  recordInPlace(args) {
    this.pointer.args = args
  }

  peekNext() {
    /*
      return the next node
      picks the latest branch of nexts
    */
    return this.pointer.nexts.at(-1)
  }

  peekPrev() {
    /*
      return the next node
      picks the latest branch of nexts
    */
    const res = this.pointer.prevs.at(-1)
    if (res === this.root) return undefined
    return res
  }

  tryNext() {
    /*
      moves pointer one step forward, if possible   
    */
    const potentialNext = this.peekNext()
    this.pointer = potentialNext ?? this.pointer
    return this
  }

  tryPrev() {
    /*
      moves pointer one step back, if possible   
    */
    const potentialPrev = this.peekPrev()
    this.pointer = potentialPrev ?? this.pointer
    return this
  }

  call() {
    if (this.pointer.args === undefined) {
      throw new Error('calling ActionHistory.call() on root')
    }

    this.func.call(this.target, ...this.pointer.args)
  }

}

function hsTrack(target, props) {
  /*
    props.keys() -> { propKey: History(target, target[propKey]), ... }
    + auto record on call
  */
  var history = {}

  for (const key in props) {
    if (props[key] === ACTION) {
      const func = target[key]

      history[key] = new ActionHistory(target, func)

      function wrapper(...args) {
        history[key].record(args)
        return func.call(target, ...args)
      }

      /*
        (options, default):     
          isTracked:          true        -- record the arguments
          isOverwrite:        false       -- record call by overwriting the one at current pointer
          isDummyCall:        false       -- don't call the action
          isArgsFromPrev:     false       -- use previous arguments instead, if possible
      */
      wrapper.trackWith = (options) => {

        const tracking = fn.condShort(
          [options.isTracked === false, (args) => { }],
          [options.isOverwrite, (args) => history[key].recordInPlace(args)],
          [true, (args) => history[key].record(args)]
        )

        const calling = fn.condShort(
          [options.isDummyCall, (args) => { }],
          [true, (args) => func.apply(target, args)]
        )

        const argumenting = fn.condShort(
          [options.isArgsFromPrev, (args) => history[key].peekPrev()?.args ?? args],
          [true, (args) => args]
        )

        return (...args) => {
          const currentArgs = argumenting(args)
          tracking(currentArgs)
          return calling(currentArgs)
        }
      }

      target[key] = wrapper

    } else {
      throw new Error('Not Implemented')
    }
  }

  return history
}

export { ACTION, VALUE, hsTrack }