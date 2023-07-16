import { observer } from "mobx-react"
import { useRef, useEffect } from 'react'

/**
  Dynamic Button
  takes the most appropiate form given its space

  action has: 
    name -- text-only string
    tick -- a function which causes it to trigger
    symbol -- path to svg asset

  -----
  | S |
  -----
  -----
  | S | 
  -----
*/
const DynButton = observer(({ action }) => {

  return (
    <button onClick={action.tick}>
      <svg><use href={action.symbolId} /></svg>
      <span>{action.name}</span>

    </button>
  )
})

export default DynButton
