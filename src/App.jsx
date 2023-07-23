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
import fn from '@/fn'

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
      <div className={'main' + (rootState.ui.props.isConfigUI.value ? ' config-ui' : '') + fn.condShort(
        [rootState.ui.props.isThemeLight.value, " theme-light"],
        [rootState.ui.props.isThemeDark.value, " theme-dark"],
        [rootState.ui.props.isThemeSystem.value, " theme-system"],
        [true, " theme-dark"]
      )} >
        <div style={{ display: "none" }}>
          {Object.keys(svgs).map((k) => (
            <div key={k} dangerouslySetInnerHTML={svgs[k]} />
          ))}
        </div>
        <DynPanel flow="col" style={{ width: "min(100vw, 60rem)" }} >
          <DynPanel flow="row" anchor="end">
            <DynPanel flow="row" isMutex={true}>
              <DynFlag property={rootState.ui.props.isThemeLight} />
              <DynFlag property={rootState.ui.props.isThemeDark} />
              <DynFlag property={rootState.ui.props.isThemeSystem} />
            </DynPanel>
            <DynFlag property={rootState.ui.props.isConfigUI} />
          </DynPanel>
          <DynPanel flow="row">
            <DynButton action={rootState.render.actions.randomCameraAngle} />
            <DynButton action={rootState.render.actions.prevCamAngle} />
            <DynButton action={rootState.render.actions.nextCamAngle} />
            <DynButton action={rootState.render.actions.focusObject} />
            <DynButton action={rootState.render.actions.normalizeObject} />
          </DynPanel>
          <DynPanel flow="row">
            <DynPanel flow="row" isMutex={true}>
              <DynFlag property={rootState.render.props.isOrbitMode} />
              <DynFlag property={rootState.render.props.isPanMode} />
            </DynPanel>
            <DynButton action={rootState.render.actions.zoomIn} />
            <DynButton action={rootState.render.actions.zoomOut} />
          </DynPanel>
          <DynPanel flow="col" flexBasis={85} style={{ alignItems: "center" }}>
            <div ref={canvasContainerRef} />
            <h1 style={{ alignSelf: "center" }}>Vite + React</h1>
            <div className="card" style={{ 'maxWidth': '640px' }}>
              <button onClick={() => rootState.render.invalidate()}>
                render count is {rootState.props.count.value}
              </button>
              <DynButton action={rootState.actions.loadLucySample} />
              <DynButton action={rootState.actions.loadInstituteSample} />
              <DynButton action={rootState.actions.loadHausSample} />
              <DynButton action={rootState.actions.loadChurchSample} />
            </div>
            <PerceptualColorSpace />
          </DynPanel>
          <DynPanel flow="row">
            Lorem Ipsum
          </DynPanel>
        </DynPanel>
      </div>
    </>
  )
})

export default App
