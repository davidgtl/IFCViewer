import { action } from "mobx"
import { observer } from "mobx-react"
import { useState, useEffect } from 'react'

const TextField = ({ property }) => {
  return (
    <div className="dynslider">
      <input data-index="0" aria-label="Small" aria-valuenow="70" aria-orientation="horizontal" aria-valuemax="100" aria-valuemin="0" type="range" min="0" max="100" step="1" value={property.value}
        onChange={action(e => property.value = e.target.value)} />
    </div>
  )
}

export default TextField


