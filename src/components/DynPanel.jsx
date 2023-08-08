import { observer } from "mobx-react"
import { useRef, useState, useEffect, cloneElement, forwardRef } from 'react'
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
const DynPanel = ({ presenter = rootState.ui, style, flexBasis, children, flow, isMutex = false, anchor }) => {

  const containerRef = useRef(null)
  const percentages = useRef([])
  const [containerLength, setContainerLength] = useState(0)
  const [forceUpdateVal, forceUpdate] = useState(0)
  const REM = useRef(16) // 16px

  const updatePercentage = (index, value) => {
    percentages.current[index] = value
    /* percentages useState doesn't do timely updates, maybe investigate? */
    forceUpdate(value)
  }

  useEffect(() => {
    setContainerLength(flow == "row" ? containerRef.current.clientWidth : containerRef.current.clientHeight)
  })
  useEffect(() => {
    REM.current = parseFloat(getComputedStyle(document.documentElement).fontSize)
  }, [getComputedStyle(document.documentElement).fontSize])
  useEffect(() => {
    // TODO: extract 4rem as default ui unit and 0.3rem ad default padding
    percentages.current = children instanceof Array && children.every(x => x.type == DynPanel) ? children.map((x) => x.props.flexBasis ?? 3.2) : [3.2]
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
            ch => ch.map((x, i) => cloneElement(x, { key: 2 * i + 0, flexBasis: percentages.current[i] })),
            /* insert a Splitter between every pair of DynPanels */
            ch => [...fn.weave(ch,
              (a, b) => fn.isnun(a, b), (a, b, i) => (
                <Splitter key={2 * i + 1}
                  presenter={presenter}
                  remUnit={REM.current} //FIXME: move to UIState and watch font-size
                  containerLength={containerLength}
                  getPrev={() => percentages.current[i]}
                  getNext={() => percentages.current[i + 1]}
                  updatePrev={(value) => updatePercentage(i, value)}
                  updateNext={(value) => updatePercentage(i + 1, value)}
                  flow={flow} />
              ))
            ]
          )
          : children
      }
    </div >
  )
}

export default DynPanel
