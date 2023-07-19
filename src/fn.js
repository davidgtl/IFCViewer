
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

  for (const key in defaults) {
    if (object[key] === undefined) {
      object[key] = defaults[key]
    }
  }
}

function defaultValue(value, defaultValue) {
  if (value === undefined) {
    return defaultValue
  } else {
    return value
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

function getPath(object, keys) {
  let res = object
  for (const key in keys) {
    res = res[key]
  }
  return res
}

/**
  create a view over the array without copying
  both indexes are inclusive
  negative values are calculated from the end
*/
function* slice(array, startIndex, endIndex) {
  if (startIndex < 0) {
    startIndex = Math.Max(0, array.length + startIndex)
  }
  if (endIndex < 0) {
    endIndex = Math.Max(0, array.length + endIndex)
  }
  for (let i = startIndex; i <= endIndex; i++) {
    yield array[i]
  }
}

function setPath(object, keys, value) {
  let res = object
  for (const key of slice(keys, 0, -2)) {
    res = res[key]
  }
  return res[keys.at(-1)]
}



export default { condShort, codeDoc, defaultsFor, defaultValue, PATH, getPath, slice, setPath }