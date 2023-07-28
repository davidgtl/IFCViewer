import { observer } from "mobx-react"
import { useRef, useEffect } from 'react'
import "./dynbutton.css"
import Symbol from "@/components/Symbol";
/**
  Dynamic Button
  takes the most appropiate form given its space

  -----------
  | S  Name |
  -----------
  --------
  | Name | 
  --------
*/
const DynButton = ({ action }) => {
  return (
    <button className="elem" onClick={action.onDone}>
      {action.symbolId && <Symbol symbolId={action.symbolId} />}
      {action.symbolId && (<span className="spacer" />)}
      <span>{action.name}</span>
    </button>
  )
}

export default DynButton
