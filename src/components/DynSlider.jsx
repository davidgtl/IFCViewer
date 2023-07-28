import { observer } from "mobx-react"
import { useRef, useEffect, useState } from 'react'
import "./splitter.css"

/**
  Splitter

  ----------------
  |S Text: value |
  ----------------
  |    |         |
  ----------------
  
  adjusts the percentange of the prev/next panels
*/
const DynSlider = ({ remUnit = 16, containerLength, valueMin = 0, valueMax = 100, updatePrev, updateNext, flow = "row" }) => {

  const containerRef = useRef(null)


  const startPos = useRef({ x: 0, y: 0 })
  const startValue = useRef(45)
  const value = useRef(0)
  const isDragging = useRef(false)
  const isRelative = useRef(false)
  const [forceUpdateVal, forceUpdate] = useState(0)


  const updateAbs = (e, offT) => {
    const delta = flow == "row" ?
      (e.clientX - offT.left - 1.2 * remUnit) / (offT.width - 3.0 * remUnit) // 1.2 = 1 iu padding + 0.2 border padding
      : (e.clientY - offT.top - 1.2 * remUnit) / (offT.height - 2.4 * remUnit)
    value.current = Math.max(Math.min(Math.floor(valueMin + (valueMax - valueMin) * delta), valueMax), valueMin)
  }

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
      updateAbs(e, offT)
    }
    forceUpdate(value.current)
  }
  const onMouseUp = (e) => {
    removeEventListener("mousemove", onMouseMove)
    removeEventListener("mouseup", onMouseUp)
    document.body.style.cursor = ''
    isDragging.current = false
    forceUpdate(null)
  }
  const onMouseDown = (e) => {
    startPos.x = e.screenX
    startPos.y = e.screenY
    startValue.current = value.current
    isDragging.current = true
    addEventListener("mousemove", onMouseMove)
    addEventListener("mouseup", onMouseUp)
    const offT = containerRef.current.getBoundingClientRect()
    const offX = e.clientX - offT.left
    const offY = e.clientY - offT.top

    isRelative.current = e.target.nodeName == "path"
    console.log(e)
    if (!isRelative.current) {
      updateAbs(e, offT)
      forceUpdate(value.current)
    }

    document.body.style.cursor = flow == "row" ? 'ew-resize' : "ns-resize"

  }

  /*
    TODO: make font feel less squeezed
    TODO: match the rounded corners
    TODO: standardize paddings -- UIConfig?
    TODO: fix on light theme -- introduce active/inactive colors 
  */

  return (
    <div ref={containerRef} className={"slider " + flow} tabIndex={0} onMouseDown={onMouseDown}
      style={{
        width: "10rem",
        height: "3rem",
        background: "var(--elem-bg-color)",
        position: "relative",
        border: "1px solid var(--elem-border-color)",
        borderRadius: "0.5rem"
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
      <svg className="symbol"><use href="#symbol_pan" /></svg>
      <span style={{
        position: "relative",
        zIndex: 5,
        pointerEvents: "none"
      }}
      >Font Size: 20px</span>
      <svg style={{
        zIndex: 2,
        position: "absolute",
        left: 0,
        width: "10rem",
        height: "3rem",
        stroke: "var(--text-inactive-color)",
        fill: "var(--text-inactive-color)",
      }} viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
        {/* <rect x={2 + value.current * 0.70} y={2} width={26} height={13} rx={2} /> */}
        <path d={`M${2 + value.current * 0.70},15 h26 v-11 a 2 2 -90 0 0 -2,-2 h-22 a 2 2 -90 0 0 -2,2 v11`}
          style={{
            // fill: isDragging.current ? "var(--text-inactive-color)" : "var(--elem-bg-color)",
            // stroke: isDragging.current ? "var(--text-inactive-color)" : "var(--elem-bg-color)",
            fill: "var(--elem-bg-color)",
            stroke: isDragging.current ? "var(--elem-highlight-inactive-color)" : "var(--elem-bg-color)",
          }} />

        <path style={{
          // fill: "var(--elem-highlight-inactive-color)",
          // stroke: "var(--elem-highlight-inactive-color)",
          fill: isDragging.current ? "var(--elem-highlight-active-color)" : "var(--elem-highlight-inactive-color)",
          stroke: isDragging.current ? "var(--elem-highlight-active-color)" : "var(--elem-highlight-inactive-color)",
        }} d={`M${2 + value.current * 0.70},15 h26 v11 a 2 2 -90 0 1 -2,2 h-22 a 2 2 -90 0 1 -2,-2 v-11`} />
        {/* <rect x={2 + value.current * 0.70} y={15} width={26} height={13} rx={2} /> */}
        <line x1="13" y1="15" x2="83" y2="15" style={{
          //"var(--elem-highlight-inactive-color)"
          // stroke: isDragging.current ? "var(--elem-highlight-active-color)" : "var(--text-inactive-color)"
          stroke: "var(--text-inactive-color)"
        }} />
        <line x1={13 + value.current * 0.7} y1="15" x2={13 + value.current * 0.7} y2="28" style={{
          // stroke: isDragging.current ? "var(--elem-highlight-active-color)" : "var(--text-inactive-color)"
          stroke: "var(--text-inactive-color)"
        }} />
      </svg>
    </div >
  )
}

export default DynSlider
