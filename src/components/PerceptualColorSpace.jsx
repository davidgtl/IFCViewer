import { observer } from "mobx-react"
import { useRef, useEffect } from 'react'
import DynPanel from "@/components/DynPanel"
import DynSlider from "@/components/DynSlider"

/**
  Why? I want a good color picker with a good perceptual color space
  How? pick the middle color such that it 
       looks like the average of the two ends
       repeat until the max error is low enough
  What? You get a color space file of Vector3s of 
        (Luma, Chroma, Hue) all in [0,1] 
        which if linearly interpolated approximate your color space
*/
const PerceptualColorSpace = ({ }) => {
  return (
    <div></div>
    // <DynPanel>
    //   <DynSlider property={
    //     {
    //       value:50,
    //       valueMin: 0,
    //       valueMax: 255,
    //     }
    //   }></DynSlider>
    // </DynPanel>
  )
}

export default PerceptualColorSpace
