import { observer } from "mobx-react"
import { useRef, useEffect } from 'react'
import Splitter from '@/components/Splitter'
import fn from '@/fn'
import "./dynpanel.css"

/**
  Dynamic Panel

  flow: row | col
  isMutex: true | false -- Visually merge chidlren elements to indicate 
  that they are related and only one can be chosen

  if children are only panels
  insert separator between them

        <div className="panel_resize panel_resize-west"
        onMouseDown={(e) => { console.log("MouseDown West", e); e.preventDefault(); e.stopPropagation(); }} />
*/
const DynPanel = ({ children, flow = "row", isMutex = false }) => {
  return (
    <div className={"elem panel " + flow + (isMutex ? " mutex" : "")}>
      {
        children instanceof Array && children.every(x => x.type == DynPanel) ?
          [...fn.weave(children, (a, b) => fn.isnun(a, b), (a, b, i) => (
            <Splitter key={i} neighbour1={a} neighbour2={b} />
          ))]
          : children
      }
    </div >
  )
}

export default DynPanel
