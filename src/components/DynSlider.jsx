import { action, runInAction } from "mobx"
import { observer } from "mobx-react"
import { useRef, useState } from 'react'
import { lerp, clamp, floorStep } from "@/mathUtils"
import fn from "@/fn"
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

  // useState causes lag in move events
  const startPos = useRef({ x: 0, y: 0 })
  const startValue = useRef(0)
  const isDragging = useRef(false)
  const isRelative = useRef(false)

  /*
    problem: how to update component when contentTopAt(0.5) changes
  */

  const valueRange = property.valueMax - property.valueMin
  const valueRel = (property.obs - property.valueMin) / valueRange
  const updateAbs = (e, rect) => {

    const valueAbs = fn.condShort(
      [presenter.flow.value == "row", (e.clientX - rect.left) / rect.width],
      [presenter.flow.value == "col", (e.clientY - rect.top) / rect.height]
    )
    runInAction(() => {
      // console.log(valueAbs)
      property.obs = fn.pipe(valueAbs,
        (x) => clamp(x, 0, 1), // discard pointer values outside the slider region
        (x) => lerp(x, property.valueMin, property.valueMax), // map [0,1] -> [min, max]
        (x) => floorStep(x, property.valueMin, property.valueStep) // discretize to valueMin + k * valueStep 
      )
    })

  }

  const onMouseMove = (e) => {
    e.preventDefault()

    if (isRelative.current) {
      const deltaAbs = fn.condShort(
        [presenter.flow.value == "row", e.screenX - startPos.x],
        [presenter.flow.value == "col", e.screenY - startPos.y]
      )

      runInAction(() => {
        property.obs = fn.pipe(startValue.current + deltaAbs / presenter.iUnit.value,
          (x) => floorStep(x, property.valueMin, property.valueStep), // discretize to valueMin + k * valueStep 
          (x) => clamp(x, property.valueMin, property.valueMax) // stop at min and max
        )
      })
    } else {
      updateAbs(e, trackBarRef.current.getBoundingClientRect())
    }
  }

  const onMouseUp = (e) => {
    isDragging.current = false

    removeEventListener("mousemove", onMouseMove)
    removeEventListener("mouseup", onMouseUp)
    document.body.style.cursor = ''

  }

  const onMouseDown = (e) => {
    isDragging.current = true
    startValue.current = property.value

    document.body.style.cursor = presenter.flow.value == "row" ? 'ew-resize' : "ns-resize"
    addEventListener("mousemove", onMouseMove)
    addEventListener("mouseup", onMouseUp)

    isRelative.current = e.target.className.includes("slider_knob")
    if (isRelative.current) {
      startPos.x = e.screenX
      startPos.y = e.screenY

    } else { // if absolute jump directly to position
      updateAbs(e, trackBarRef.current.getBoundingClientRect())
    }

  }
  /*
    TODO: make font feel less squeezed
    TODO: match the rounded corners
    TODO: standardize paddings -- UIConfig?
    TODO: fix on light theme -- introduce active/inactive colors 
  */

  return (
    <div className={"slider " + presenter.flow.value} tabIndex={0} onMouseDown={onMouseDown}>
      <div className="slider_knob" style={{

        left: presenter.contentLeftAt.obs(valueRel) + "rem",
        backgroundColor: isDragging.current
          ? "var(--elem-highlight-active-color)"
          : "var(--elem-highlight-inactive-color)",
      }}>
        <div className="slider_pointer" />
      </div>
      <div className="slider_trackBar" ref={trackBarRef}
        style={{
          left: (presenter.paddingLeft.obs() + presenter.vUnit.obs) + "rem",
          top: presenter.contentTopAt.obs(0.5) + "rem",
          width: presenter.contentWidth.obs() + "rem"
        }} />
    </div >
  )
})

export default DynSlider
