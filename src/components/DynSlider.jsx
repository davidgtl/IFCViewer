import { action } from "mobx"
import { observer } from "mobx-react"
import { useState, useEffect } from 'react'
import "./dynslider.css"

const DynSlider = ({ property }) => {
  return (
    <div className="dynslider" role="slider" tabIndex="0" aria-valuemin={property.valueMin} aria-valuenow={property.value} aria-valuemax={property.valueMax} aria-labelledby="slider">
      <div className="dynslider_handle"/>
      <div className="dynslider_meter"/>
    </div>
  )
}

export default DynSlider


