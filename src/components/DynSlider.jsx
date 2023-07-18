import { action } from "mobx"
import { observer } from "mobx-react"
import { useState, useEffect } from 'react'

const TextField = ({ state }) => {

  const [value, setValue] = useState(70);


  return (
    <div className="dynslider">

      onenter/mouseup emmit final event
      onchange emmit preview event
      <input data-index="0" aria-label="Small" aria-valuenow="70" aria-orientation="horizontal" aria-valuemax="100" aria-valuemin="0" type="range" min="0" max="100" step="1" value={value}
        onChange={action(e => setValue(e.target.value))} />
      {/* <input label="Name"
        value={value}
        onChange={action(e => value = e.target.value)}
        onFocus={(e) => {
          console.log('Focused on input');
        }}></input> */}
    </div>
  )
}

export default TextField


