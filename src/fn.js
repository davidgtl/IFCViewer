
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

export default { condShort, codeDoc }