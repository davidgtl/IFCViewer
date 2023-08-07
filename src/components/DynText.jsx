import { observer } from "mobx-react"
import { useRef, useEffect } from 'react'

/**
  Dynamic Text
*/
const DynText = observer(({ property }) => {
  return (
    <div className="inputText elem">
      <input label="Name"
        value={property.obs}
        onChange={action(e => property.obs = e.target.value)}
      ></input>
    </div>
  )
})

export default DynText
