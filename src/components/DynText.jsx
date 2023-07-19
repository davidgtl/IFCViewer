import { observer } from "mobx-react"
import { useRef, useEffect } from 'react'

/**
  Dynamic Text
*/
const DynText = observer(({ property }) => {
  return (
    <div className="inputText elem">
      <input label="Name"
        value={property.value}
        onChange={action(e => property.value = e.target.value)}
      ></input>
    </div>
  )
})

export default DynText
