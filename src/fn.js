
/**
  return first case[1] where case[0] is true 
*/
function condShort(...cases) {
  for (const c in cases) {
    if (cases[c][0] === true) {
      return cases[c][1]
    }
  }
  throw new Error("No default was provided")
}

/**
  provide syntax highlighting in IDE for a code example
  should compile to nothing after dead code elimination
*/
function codeDoc(dummyArgs) {
  return;
}

/**
  not undefined: 
  array.every(x => x !== undefined)
*/
 function isnun(...array) {
   return array.every(x => x !== undefined)
}

/**
  not null: 
  array.every(x => x !== null)
*/
function isnn(...array) {
  return array.every(x => x !== null)
}

/**
  is defined:
  array.every(x => x !== undefined && x !== null)
*/
function isdef(...array) {
  return array.every(x => x !== undefined && x !== null)
}

/**
  (  
    { a: 99, b: null, c: undefined }, 
    { a: 1,  b: 2,    c: 3 }
  ) => 
    { a: 99, b: null, c: 3 } 
*/
function defaultsFor(object, defaults) {

  for (const key in defaults) {
    if (object[key] === undefined) {
      object[key] = defaults[key]
    }
  }
}


/**
  value ?? defaultValue, but only for undefined
*/
function defaultValue(value, defaultValue) {
  if (value === undefined) {
    return defaultValue
  } else {
    return value
  }
}

/**
  create a view over const array (without copying like Array.slice)
  
  both indexes are INCLUSIVE
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


/**
  create iterable view over const array 
    inserting element(left, right, index)
    between left and right 
    where condition(left, right)
  
  left and right will be *undefined* for first/last position
  
  given [..., 3, 4, ...]
  where condition(3,4) == true  => [..., 3, element(3,4), 4, ...]
  where condition(3,4) == false => [..., 3,               4, ...] 
 */
function* weave(array, condition, element) {
  const startIndex = 0
  const endIndex = array.length - 1

  if (condition(undefined, array[0], -1)) {
    yield element(undefined, array[0], -1)
  }
  for (let i = startIndex; i <= endIndex; i++) {
    yield array[i]

    if (condition(array[i], array[i + 1], i)) {
      yield element(array[i], array[i + 1], i)
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
)

/**
  (x, ['a','b','c','d']) => x.a.b.c.d
*/
function getPath(object, keys) {
  let res = object
  for (const key in keys) {
    res = res[key]
  }
  return res
}

/**
  (x, ['a','b','c','d'], value) => x.a.b.c.d = value
*/
function setPath(object, keys, value) {
  let res = object
  for (const key of slice(keys, 0, -2)) {
    res = res[key]
  }
  return res[keys.at(-1)]
}

/**
  pipe(x, doA, doB, doC) ==
  doC( doB( doA( x )))
*/
function pipe(x, ...transformations) {
  for (const func of transformations) {
    x = func(x)
  }
  return x
}

export default { condShort, codeDoc, isnun, isnn, isdef, defaultsFor, defaultValue, slice, weave, PATH, getPath, setPath, pipe }