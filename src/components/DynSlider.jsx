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
  const [isDragging, setIsDragging] = useState(false)
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
        (x) => lerp(x, property.valueMin, property.valueMax), // map [0,1] -> [min, max]
        (x) => floorStep(x, property.valueMin, property.valueStep), // discretize to valueMin + k * valueStep 
        (x) => clamp(x, property.valueMin, property.valueMax)
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
        // 1 iUnit = 1 tick
        property.obs = fn.pipe(
          startValue.current + (deltaAbs / presenter.iUnit.value) * property.valueStep,
          (x) => floorStep(x, property.valueMin, property.valueStep), // discretize to valueMin + k * valueStep 
          (x) => clamp(x, property.valueMin, property.valueMax) // stop at min and max
        )
      })
    } else {
      updateAbs(e, trackBarRef.current.getBoundingClientRect())
    }
  }

  const onMouseUp = (e) => {
    setIsDragging(false)

    removeEventListener("mousemove", onMouseMove)
    removeEventListener("mouseup", onMouseUp)
    document.body.style.cursor = ''

  }

  const onMouseDown = (e) => {
    setIsDragging(true)
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
    <div className={"slider " + presenter.flow.value} tabIndex={0} onMouseDown={onMouseDown}
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
