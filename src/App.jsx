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
    container.appendChild(rootState.render._target.renderer.domElement)
    return () => container.removeChild(rootState.render._target.renderer.domElement)
  }, [])

  return (
    <>
      <div className={'main' + (rootState.ui.isConfigUI.obs ? ' config-ui' : '') + fn.condShort(
        [rootState.ui.isThemeLight.obs, " theme-light"],
        [rootState.ui.isThemeDark.obs, " theme-dark"],
        [rootState.ui.isThemeSystem.obs, " theme-system"],
        [true, " theme-dark"]
      )} style={{
        "--layout-vUnit": "black"
      }} >
        <div style={{ display: "none" }}>
          {Object.keys(svgs).map((k) => (
            <div key={k} dangerouslySetInnerHTML={svgs[k]} />
          ))}
        </div>
        <DynPanel flow="col" style={{ width: "min(100vw, 60rem)" }} >
          <DynPanel flow="row" anchor="end">
            <DynPanel flow="row" isMutex={true}>
              <DynFlag property={rootState.ui.isThemeLight} />
              <DynFlag property={rootState.ui.isThemeDark} />
              <DynFlag property={rootState.ui.isThemeSystem} />
            </DynPanel>
            <DynFlag property={rootState.ui.isConfigUI} />
          </DynPanel>
          <DynPanel flow="row" isVisible={rootState.ui.isConfigUI.obs}>
            {"Visual Unit:"}
            <DynSlider property={rootState.ui.vUnit} presenter={rootState.ui.presenters.standardSlider} />
            {"Interaction Unit:"}
            <DynSlider property={rootState.ui.iUnit} presenter={rootState.ui.presenters.standardSlider} />
          </DynPanel>
          <DynPanel flow="row">
            <DynButton action={rootState.render.randomCameraAngle} />
            <DynButton action={rootState.render.prevCamAngle} />
            <DynButton action={rootState.render.nextCamAngle} />
            <DynButton action={rootState.render.focusObject} />
            <DynButton action={rootState.render.normalizeObject} />
          </DynPanel>
          <DynPanel flow="row">
            <DynPanel flow="row" isMutex={true}>
              <DynFlag property={rootState.render.isOrbitMode} />
              <DynFlag property={rootState.render.isPanMode} />
            </DynPanel>
            <DynButton action={rootState.render.zoomIn} />
            <DynButton action={rootState.render.zoomOut} />

            <DynSlider property={rootState.render.focusDistance} presenter={rootState.ui.presenters.standardSlider} />

          </DynPanel>
          <DynPanel flow="col" flexBasis={85} style={{ alignItems: "center" }}>
            <div ref={canvasContainerRef} />
            <h1 style={{ alignSelf: "center" }}>Vite + React</h1>
            <div className="card" style={{ 'maxWidth': '640px' }}>
              <button onClick={() => rootState.render.invalidate.action()}
                style={{
                  color: "var(--text-inactive-color)"
                }}>
                render count is {rootState.count.obs}
              </button>
              <DynButton action={rootState.render.invalidate} />
              <DynButton action={rootState.loadLucySample} />
              {/* <DynButton action={rootState.loadInstituteSample} /> */}
              {/* <DynButton action={rootState.loadHausSample} /> */}
              <DynButton action={rootState.loadChurchSample} />
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
