import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { observer } from "mobx-react"
import { useRef, useEffect } from 'react'
import DynPanel from "@/components/DynPanel"
import DynButton from "@/components/DynButton"
import DynSlider from "@/components/DynSlider"
import DynFlag from "@/components/DynFlag"
import PerceptualColorSpace from "@/components/PerceptualColorSpace"
import DynText from "@/components/DynText"
import { svgs } from 'svgSymbols'
import rootState from "./state/rootState"

import './App.css'

const App = observer(({ }) => {

  const canvasContainerRef = useRef(null)

  useEffect(() => {
    const container = canvasContainerRef.current
    container.appendChild(rootState.render.domElement)
    return () => container.removeChild(rootState.render.domElement)
  }, [])

  return (
    <>
      <div className='main config-ui theme-dark'>
        {/* make svgs under assets/symbols available via use href="#symbol_nameHere" */}
        <div style={{ display: "none" }}>
          {Object.keys(svgs).map((k) => (
            <div key={k} dangerouslySetInnerHTML={svgs[k]} />
          ))}
        </div>
        <DynPanel flow="col">
          <DynPanel>
            <DynButton action={rootState.render.actions.randomCameraAngle} />
            <DynButton action={rootState.render.actions.prevCamAngle} />
            <DynButton action={rootState.render.actions.nextCamAngle} />
            <DynButton action={rootState.render.actions.focusObject} />
            <DynButton action={rootState.render.actions.normalizeObject} />
            <DynButton action={rootState.render.actions.zoomIn} />
            <DynButton action={rootState.render.actions.zoomOut} />
          </DynPanel>
          <DynPanel isMutex={true}>
            <DynFlag property={rootState.render.properties.isOrbitMode} />
            <DynFlag property={rootState.render.properties.isPanMode} />
          </DynPanel>
        </DynPanel>
        <DynPanel flow="col">
          <div ref={canvasContainerRef} />
          <h1 style={{ alignSelf: "center" }}>Vite + React</h1>
          <div className="card" style={{ 'maxWidth': '640px' }}>
            <button onClick={() => rootState.render.invalidate()}>
              render count is {rootState.properties.count.value}
            </button>
            <DynButton action={rootState.actions.loadLucySample} />
            <DynButton action={rootState.actions.loadInstituteSample} />
            <DynButton action={rootState.actions.loadHausSample} />
            <DynButton action={rootState.actions.loadChurchSample} />
          </div>
          <PerceptualColorSpace />
        </DynPanel>
      </div>
    </>
  )
})

export default App
