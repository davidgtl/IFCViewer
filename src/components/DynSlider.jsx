import { observer } from "mobx-react"
import { useRef, useEffect, useState } from 'react'
import "./splitter.css"

/**
  Splitter
  
  adjusts the percentange of the prev/next panels
*/
const DynSlider = ({ remUnit = 16, containerLength, valueMin = 0, valueMax = 100, updatePrev, updateNext, flow = "row" }) => {

  const containerRef = useRef(null)


  const startPos = useRef({ x: 0, y: 0 })
  const startValue = useRef(45)
  const value = useRef(0)
  const isRelative = useRef(false)
  const [forceUpdateVal, forceUpdate] = useState(0)


  const onMouseMove = (e) => {
    e.preventDefault()
    if (isRelative.current) {
      const delta = flow == "row" ? e.screenX - startPos.x : e.screenY - startPos.y
      const deltaRelative = delta / remUnit
      // updatePrev(startValues[0] + Math.floor(delta / remUnit))
      // updateNext(startValues[1] - Math.floor(delta / remUnit))
      // console.log("remUnit", remUnit, "delta", delta)
      value.current =
        Math.max(Math.min(Math.floor(startValue.current + deltaRelative), valueMax), valueMin)
    } else {
      const offT = containerRef.current.getBoundingClientRect()
      const delta = flow == "row" ? (e.clientX - offT.left) / offT.width : (e.clientY - offT.top) / offT.height

      value.current = Math.max(Math.min(Math.floor(valueMin + (valueMax - valueMin) * delta), valueMax), valueMin)
    }
    forceUpdate(value.current)
  }
  const onMouseUp = (e) => {
    removeEventListener("mousemove", onMouseMove)
    removeEventListener("mouseup", onMouseUp)
    document.body.style.cursor = ''
  }
  const onMouseDown = (e) => {
    startPos.x = e.screenX
    startPos.y = e.screenY
    startValue.current = value.current
    addEventListener("mousemove", onMouseMove)
    addEventListener("mouseup", onMouseUp)
    const offT = containerRef.current.getBoundingClientRect()
    const offX = e.clientX - offT.left
    const offY = e.clientY - offT.top

    isRelative.current = e.target.nodeName == "rect"
    console.log(e)
    if (!isRelative.current) {
      const delta = flow == "row" ? (e.clientX - offT.left) / offT.width : (e.clientY - offT.top) / offT.height

      value.current = Math.floor(valueMin + (valueMax - valueMin) * delta)
      forceUpdate(value.current)
    }

    document.body.style.cursor = flow == "row" ? 'ew-resize' : "ns-resize"

  }

  return (
    <div ref={containerRef} className={"slider " + flow} tabIndex={0} onMouseDown={onMouseDown}
      style={{
        width: "10rem",
        height: "3rem",
        background: "var(--elem-bg-color)",
        position: "relative"
      }}>
      {/* <span style={{
        position: "absolute",
        left: "0.2em"
      }}>{"Font size: " + value.current}</span> */}
      {/* <span style={{
        position: "absolute",
        left: "0.2em"
      }}>{valueMin}</span> */}
      {/* <span style={{
        position: "absolute",
        right: "0.2em"
      }}>{`[${valueMin}, ${valueMax}]`}</span> */}
      <svg style={{
        width: "10rem",
        height: "3rem",
        stroke: "var(--text-inactive-color)",
        fill: "var(--text-inactive-color)",
      }} viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
        <line x1="5" y1="15" x2="95" y2="15"/>
        <rect x={2 + value.current * 0.70} y="2" width={26} height={26} rx="2" />
      </svg>
    </div >
  )
}

export default DynSlider
