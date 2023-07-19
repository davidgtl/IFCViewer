import { observer } from "mobx-react"
import { useRef, useEffect } from 'react'

/**
  Dynamic Panel
*/
const DynPanel = ({ children, flow }) => {
  return (
    <div className={"panel elem " + (flow ?? "row")}
    // onFocus={(e) => console.log("Focused", e)}
    // onMouseOver={(e) => console.log("MouseOver", e)}
    // onBlur={(e) => console.log("Defocused", e)}
    >
      {children}
    </div>
  )
}

export default DynPanel
