import { observer } from "mobx-react"
import { useRef, useState, useEffect, cloneElement, useReducer } from 'react'
import Splitter from '@/components/Splitter'
import fn from '@/fn'
import "./DynPanel.css"
import rootState from "@/state/rootState"

/**
  Dynamic Panel

  flow: row | col
  isMutex: true | false -- Visually merge chidlren elements to indicate 
  that they are related and only one can be chosen
  anchor: start | center | end -- reference to align items to

  if children are only panels
  insert movable splitter between them

*/
const DynPanel = observer(({ presenter = rootState.ui, style, flexBasis, children, flow, isMutex = false, anchor }) => {

  const containerRef = useRef(null)
  const scales = useRef([])
  const [containerLength, setContainerLength] = useState(0)
  const [_, forceUpdate] = useReducer(() => ({}), {})

  const defaultScale = presenter.elemWidth.obs() * 1.1
  const updateScales = (index, value) => {
    scales.current[index] = value
    forceUpdate()
  }

  useEffect(() => {
    setContainerLength(flow == "row" ? containerRef.current.clientWidth : containerRef.current.clientHeight)
  })

  useEffect(() => {
    scales.current = children instanceof Array && children.every(x => x.type == DynPanel)
      ? children.map((x) => x.props.flexBasis ?? 1) : [1]
  }, [])

  return (
    <div ref={containerRef} style={{
      ...style,
      flexBasis: `${flexBasis}rem`,
      justifyContent: fn.condShort(
        [anchor == "start", "flex-start"],
        [anchor == "center", "center"],
        [anchor == "end", "flex-end"],
        [true, "flex-start"],
      )
    }}
      className={"elem panel " + flow + (isMutex ? " mutex" : "")}>
      {
        children instanceof Array && children.every(x => x.type == DynPanel) ?
          fn.pipe(children,
            /* inject flexBasis prop into child DynPanels */
            ch => ch.map((x, i) => cloneElement(x, { key: 2 * i + 0, flexBasis: scales.current[i] * defaultScale })),
            /* insert a Splitter between every pair of DynPanels */
            ch => [...fn.weave(ch,
              (a, b) => fn.isnun(a, b), (a, b, i) => (
                <Splitter key={2 * i + 1}
                  presenter={presenter}
                  containerLength={containerLength}
                  getPrev={() => scales.current[i]}
                  getNext={() => scales.current[i + 1]}
                  updatePrev={(value) => updateScales(i, value)}
                  updateNext={(value) => updateScales(i + 1, value)}
                  flow={flow} />
              ))
            ]
          )
          : children
      }
    </div >
  )
})

export default DynPanel
