import { action, runInAction } from "mobx"
import { observer } from "mobx-react"
import { useRef, useState } from 'react'
import { lerp, clamp, floorStep } from "@/mathUtils"
import fn from "@/fn"
import useGenericPointer from "@/framework/genericPointer"
import "./DynSlider.css"

/**
 * ## DynSlider
 *
 * @example
 * --------------------     -
 * | |-----|          |     |
 * | | R|--|--------- |     | <- presenter.iUnit
 * | |-----|    A     |     |
 * --------------------     -
 *
 *   |--------------| 
 *         ^-- presenter.contentLength
 * 
 * @summary
 * - `R` - relative changes when starting drag inside knob
 * - `A` - absolute changes clicking or starting drag outside knob
 *
 * ### controls:
 *   - `property.value`:
 *     - **between** `property.valueMin` and `property.valueMax`
 *     - with **tick size** of `property.valueStep`
 *
 * ### presented:
 *   - with **trackbar length** of `presenter.contentLength`
 *   - with **layout**:
 *     - **horizontal** when `presenter.flow` == `"row"`
 *     - **vertical** when `presenter.flow` == `"col"`
 *   - with **short side** of `presenter.iUnit`
 *
*/
const DynSlider = observer(({ property, presenter }) => {

  const trackBarRef = useRef(null)
  const elementRef = useRef(null);

  // useState causes lag in move events
  const isRelative = useRef(false)
  const startValue = useRef(0)
  const startPos = useRef({ x: 0, y: 0 }).current
  const startRect = useRef({ }).current

  const [isDragging, setIsDragging] = useState(false)

  const valueRange = property.valueMax - property.valueMin
  const valueRel = (property.obs - property.valueMin) / valueRange

  const updateAbs = (e) => {

    const valueAbs = fn.condShort(
      [presenter.flow.value == "row", (e.clientX - startRect.left) / startRect.width],
      [presenter.flow.value == "col", (e.clientY - startRect.top) / startRect.height]
    )
    runInAction(() => {
      // map valueAbs with [0,1] => [valueMin..valueStep..valueMax]
      property.obs = fn.pipe(valueAbs,
        (x) => lerp(x, property.valueMin, property.valueMax), // map [0,1] -> [min, max]
        (x) => floorStep(x, property.valueMin, property.valueStep), // discretize to valueMin + k * valueStep 
        (x) => clamp(x, property.valueMin, property.valueMax) // don't go out of bounds
      )
    })
  }

  useGenericPointer({
    elementRef: elementRef,
    onDown: (pointer) => {
      setIsDragging(true)
      startValue.current = property.value

      document.body.style.cursor = presenter.flow.value == "row" ? 'ew-resize' : "ns-resize"

      isRelative.current = pointer.target.className.includes("slider_knob")
      if (isRelative.current) {
        // save reference point
        startPos.x = pointer.screenX
        startPos.y = pointer.screenY

      } else { // if absolute jump directly to position
        const rect = trackBarRef.current.getBoundingClientRect() 
        
        // don't change the startRect reference, just update
        for(var k of ['width', 'height', 'left', 'top']){
          startRect[k] = rect[k]
        }
        updateAbs(pointer)
      }

    },
    onMove: (pointer) => {

      if (isRelative.current) {
        const deltaAbs = fn.condShort(
          [presenter.flow.value == "row", pointer.screenX - startPos.x],
          [presenter.flow.value == "col", pointer.screenY - startPos.y]
        )

        runInAction(() => {
          // map distance(startPos, currentPos) with (0.1 iUnit(rem) * px/rem) => 1 valueStep
          property.obs = fn.pipe(
            startValue.current + (deltaAbs / (0.1 * presenter.iUnit.value * presenter.rem.value)) * property.valueStep,
            (x) => floorStep(x, property.valueMin, property.valueStep), // discretize to valueMin + k * valueStep 
            (x) => clamp(x, property.valueMin, property.valueMax) // don't go out of bounds
          )
        })
      } else {
        updateAbs(pointer)
      }
    },
    onUp: (e) => {
      setIsDragging(false)
      document.body.style.cursor = ''
    }
  })

  return (
    <div className={"slider " + presenter.flow.value} tabIndex={0} ref={elementRef}
      style={{
        width: (
          presenter.elemWidth.obs() // knob
          + presenter.contentWidth.obs() // trackBar 
        ) + "rem"
      }}>
      <div className="slider_knob" style={{

        left: (presenter.contentLeftAt.obs(valueRel) - presenter.paddingLeft.obs()) + "rem",
        backgroundColor: isDragging
          ? "var(--elem-highlight-active-color)"
          : "var(--elem-highlight-inactive-color)",
      }}>
        <div className="slider_pointer" />
      </div>
      <div className="slider_trackBar" ref={trackBarRef}
        style={{
          width: presenter.contentWidth.obs() + "rem"
        }} />
    </div >
  )
})

export default DynSlider
