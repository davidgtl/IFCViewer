import { observer } from "mobx-react"
import { useRef, useEffect } from 'react'
import { floorStep } from "@/mathUtils"
import useGenericPointer from "@/framework/genericPointer"
import "./Splitter.css"

/**
  Splitter
  
  adjusts the percentange of the prev/next panels
*/
const Splitter = ({ presenter, containerLength, getPrev, getNext, updatePrev, updateNext, flow = "row" }) => {

  // TODO:  move flow to presenter? 

  const startPos = useRef({ x: 0, y: 0 }).current
  const startValues = useRef([0, 0]).current
  const elementRef = useRef(null)

  useGenericPointer({
    elementRef: elementRef,
    onDown: (e) => {
      startPos.x = e.screenX
      startPos.y = e.screenY
      startValues[0] = getPrev()
      startValues[1] = getNext()
      document.body.style.cursor = flow == "row" ? 'ew-resize' : "ns-resize"
    },
    onMove: (e) => {
      const valueAbs = flow == "row" ? e.screenX - startPos.x : e.screenY - startPos.y
      const valueAbsRem = valueAbs / (presenter.elemWidth.value() * presenter.rem.value + presenter.gap.value )

      // TODO: nice snapping for current elemWidth/Height
      // updatePrev(floorStepstartValues[0] + valueAbsRem, 0, presenter.elemHeight.value()*1.1))
      updatePrev(Math.max(0.1, startValues[0] + valueAbsRem))
      updateNext(Math.max(0.1, startValues[1] - valueAbsRem))
    },
    onUp: (e) => {
      document.body.style.cursor = ''
    }
  })

  return (
    <div className={"splitter " + flow} tabIndex={0} ref={elementRef}>
      <svg viewBox={flow == "row" ? "0 0 10 100" : "0 0 100 10"} xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width={flow == "row" ? 10 : 100} height={flow == "row" ? 100 : 10} rx="2" />
      </svg>
    </div >
  )
}

export default Splitter
