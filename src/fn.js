
/**
* @example
*  condShort(
*   [1 == 2, "a"],
*   [3 == 6-3, "b"],
*   [true, "default"],
*  ) == "b"
*
* @summary
*  return first case[1] where case[0] is true
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
*  provide syntax highlighting in IDE for a code example
*  should compile to nothing after dead code elimination
*
*  (has better syntax highlighting than jsdoc's example)
*  
*  TODO: check if it's eliminated, maybe add a build plugin
*/
function codeDoc(dummyArgs) {
  return;
}

/**
*  not undefined: 
*  array.every(x => x !== undefined)
*/
function isnun(...array) {
  return array.every(x => x !== undefined)
}

/**
*  not null: 
*  array.every(x => x !== null)
*/
function isnn(...array) {
  return array.every(x => x !== null)
}

/**
*  is defined:
*  @example
*  array.every(x => x !== undefined && x !== null)
*/
function isdef(...array) {
  return array.every(x => x !== undefined && x !== null)
}

/**
* @example
*  (  
*    { a: 99, b: null, c: undefined }, 
*    { a: 1,  b: 2,    c: 3 }
*  ) => 
*    { a: 99, b: null, c: 3 } 
*/
function defaultsFor(object, defaults) {

  for (const key in defaults) {
    if (object[key] === undefined) {
      object[key] = defaults[key]
    }
  }
}


/**
* @example
*  value ?? defaultValue // but only for undefined
*/
function defaultValue(value, defaultValue) {
  if (value === undefined) {
    return defaultValue
  } else {
    return value
  }
}

/**
 * @example 
 *  for(const x of slice([10, 11, 12, 13], 2, 3))
 *      // x is 12, 13
 * @summary
*  create a view over const array (without copying like Array.slice)
*  both indexes are INCLUSIVE
*  negative values are calculated from the end
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
* @example
* for (const x of 
*      weave([10, 11, 12, 13], (l, r) => l+r == 23, (l, r, index) => index)
*  )
*  // x is 10, 11, 1, 12, 13
*
* @summary 
*  create iterable view over const array 
*    inserting element(left, right, index)
*    between left and right 
*    where condition(left, right)
*  
*  left and right will be *undefined* for first/last position
*  
*  given [..., 3, 4, ...]
*  where condition(3,4) == true  => [..., 3, element(3,4), 4, ...]
*  where condition(3,4) == false => [..., 3,               4, ...] 
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
* @example 
*  PATH.a.b.c.d() returns ['a','b','c','d']
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
* @example
*  getPath(x, ['a','b','c','d']) returns x.a.b.c.d
*/
function getPath(object, keys) {
  let res = object
  for (const key in keys) {
    res = res[key]
  }
  return res
}

/**
* @example 
*  setPath(x, ['a','b','c','d'], value) sets x.a.b.c.d = value
*/
function setPath(object, keys, value) {
  let res = object
  for (const key of slice(keys, 0, -2)) {
    res = res[key]
  }
  return res[keys.at(-1)]
}

/**
* @example 
*  pipe(x, doA, doB, doC) == 
*     doC( doB( doA( x )))
*/
function pipe(x, ...transformations) {
  for (const func of transformations) {
    x = func(x)
  }
  return x
}

/**
* @example 
*  res = inheritFrom({a:33}, {a:0, b:0})
*  
*  res.a === 33
*  res.b === 0
*  res.b = 71
*    // => the parent object doesn't change
* @summary
*  parents will be searched reccursively
*/
function inheritFrom(obj, objRef) {
  // should be more efficient than a custom Proxy
  // it's enough for inheriting from one parent object
  Object.setPrototypeOf(obj, objRef)
  return obj
}

export default { condShort, codeDoc, isnun, isnn, isdef, defaultsFor, defaultValue, slice, weave, PATH, getPath, setPath, pipe, inheritFrom }