import { observer } from "mobx-react"
import { useRef, useState, useEffect, cloneElement, forwardRef } from 'react'
import Splitter from '@/components/Splitter'
import fn from '@/fn'
import "./dynpanel.css"

/**
  Dynamic Panel

  flow: row | col
  isMutex: true | false -- Visually merge chidlren elements to indicate 
  that they are related and only one can be chosen

  if children are only panels
  insert movable splitter between them

*/
const DynPanel = ({ style, flexBasis, children, flow, isMutex = false }) => {

  const containerRef = useRef(null)
  const percentages = useRef([])
  const [containerLength, setContainerLength] = useState(0)
  const [forceUpdateVal, forceUpdate] = useState(0)


  const updatePercentage = (index, value) => {
    percentages.current[index] = value
    /* percentages useState doesn't do timely updates, maybe investigate? */
    forceUpdate(value)
  }

  useEffect(() => {
    setContainerLength(flow == "row" ? containerRef.current.clientWidth : containerRef.current.clientHeight)
  })
  useEffect(() => {
    percentages.current = children instanceof Array ? children.map((x) => x.props.flexBasis ?? 100 / children.length) : [100]
  }, [])

  return (
    <div ref={containerRef} style={{ ...style, flexBasis: `${flexBasis}%` }}
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
