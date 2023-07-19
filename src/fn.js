
/**
 * return first case[1] where case[0] is true 
 */
function condShort(...cases) {
  for (const c in cases) {
    if (cases[c][0] === true) {
      return cases[c][1]
    }
  }
  throw new Error("No default was provided")
}

function codeDoc(dummyArgs) {
  return;
}

function defaultsFor(object, defaults) {

  for (key in defaults) {
    if (object[key] === undefined) {
      object[key] = defaults[key]
    }
  }

}

/**
  PATH.a.b.c.d() returns ['a','b','c','d']
*/
const PATH = new Proxy(
  {},
  {
    get(target, prop) {
      return new Proxy(
        {},
        {
          accumulator: [prop],
          get(target, prop) {
            accumulator.push(prop)
            return this
          },
          apply(target, thisArg, args) {
            return this.accumulator
          },
        }
      )
    }
  }
);

function getPath(object, keys){
  let res = object
  for(const key in keys){
    res = res[key]
  }
  return res
}

function setPath(object, keys, value){
  let res = object
  for(const key in keys){
    res = res[key]
  }
  return res
}



export default { condShort, codeDoc }