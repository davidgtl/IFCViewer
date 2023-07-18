
import { action } from "mobx"
import { observer } from "mobx-react"
import { useState, useEffect } from 'react'

const DynText = ({ state }) => {

  const [value, setValue] = useState(70);

  return (
    <div className="dyntext">
      <input label="Name"
        value={value}
        onChange={action(e => setValue(e.target.value))}
        onFocus={(e) => {
          console.log('Focused on input');
        }}></input>
    </div>
  )
}

export default DynText