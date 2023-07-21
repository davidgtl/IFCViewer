import { observer } from "mobx-react"
import { useRef, useEffect } from 'react'
import "./splitter.css"

/**
  Splitter
  
  adjusts the percentange of the left/right or top/bottom panels
*/
const Splitter = ({ neighbour1, neighbour2, flow = "row"}) => {
  return (
    <div className={"splitter " + flow } tabIndex={0} onMouseMove={
      (e) => neighbour1.style.flex-basis = x%
    }>
      <svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="100" height="10" rx="2" />
      </svg>

    </div >
  )
}

export default Splitter
