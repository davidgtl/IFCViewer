import { observer } from "mobx-react"
import { useRef, useEffect } from 'react'
import "./Splitter.css"

/**
  Splitter
  
  adjusts the percentange of the prev/next panels
*/
const Splitter = ({ remUnit, containerLength, getPrev, getNext, updatePrev, updateNext, flow = "row" }) => {

  const startPos = useRef({ x: 0, y: 0 })
  const startValues = useRef([0, 0])


  const onMouseMove = (e) => {
    e.preventDefault()
    const delta = flow == "row" ? e.screenX - startPos.x : e.screenY - startPos.y
    // const deltaRelative = delta / remUnit
    updatePrev(startValues[0] + Math.floor(delta / remUnit))
    updateNext(startValues[1] - Math.floor(delta / remUnit))
    console.log("remUnit", remUnit, "delta", delta)
  }
  const onMouseUp = (e) => {
    removeEventListener("mousemove", onMouseMove)
    removeEventListener("mouseup", onMouseUp)
    document.body.style.cursor = ''
  }
  const onMouseDown = (e) => {
    startPos.x = e.screenX
    startPos.y = e.screenY
    startValues[0] = getPrev()
    startValues[1] = getNext()
    addEventListener("mousemove", onMouseMove)
    addEventListener("mouseup", onMouseUp)
    document.body.style.cursor = flow == "row" ? 'ew-resize' : "ns-resize"
  }

  return (
    <div className={"splitter " + flow} tabIndex={0} onMouseDown={onMouseDown}>
      <svg viewBox={flow == "row" ? "0 0 10 100" : "0 0 100 10"} xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width={flow == "row" ? 10 : 100} height={flow == "row" ? 100 : 10} rx="2" />
      </svg>

    </div >
  )
}

export default Splitter
