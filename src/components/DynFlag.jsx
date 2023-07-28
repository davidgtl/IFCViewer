import { observer } from "mobx-react"
import { useRef, useEffect } from 'react'
import Symbol from "@/components/Symbol";
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
      {property.symbolId && <Symbol symbolId={property.symbolId} />}
      {property.symbolId && (<span className="spacer" />)}
      <span>{property.name}</span>
    </button>
  )
})

export default DynFlag
