import { observer } from "mobx-react"
import { useRef, useEffect } from 'react'
import "./dynflag.css"

/**
  Dynamic Flag
  takes the most appropiate form given its space

  -----------
  | S  Name |
  -----------
  --------
  | Name | 
  --------
*/
const DynFlag = observer(({ property }) => {
  return (
    <button className={"elem flag " + (property.value ? "flag-active" : "flag-inactive")} onClick={property.onToggle}>
      {property.symbolId && (<svg><use href={property.symbolId} /></svg>)}
      {property.symbolId && (<span className="spacer" />)}
      <span>{property.name}</span>
    </button>
  )
})

export default DynFlag
