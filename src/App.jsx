import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { observer } from "mobx-react"
import { useRef, useEffect } from 'react'
import DynButton from "@/components/DynButton"
import DynSlider from "@/components/DynSlider"
import DynText from "@/components/DynText"
import { svgs } from 'svgSymbols'
import rootState from "./state/rootState"

import './App.css'

const App = observer(({ state }) => {

  const canvasContainerRef = useRef(null)

  useEffect(() => {
    const container = canvasContainerRef.current
    container.appendChild(rootState.render.domElement)
  }, [])

  return (
    <>
      {/* make svgs under assets/symbols available via use href="#symbol_nameHere" */}
      <div style={{ display: "none" }}>
        {Object.keys(svgs).map((k) => (
          <div key={k} dangerouslySetInnerHTML={svgs[k]} />
        ))}
      </div>
      <DynText value={rootState.someText} state={rootState}/>
      <DynSlider/>
      <div ref={canvasContainerRef} />
      <h1>Vite + React</h1>
      <div className="card" style={{ 'maxWidth': '640px' }}>
        <button onClick={() => rootState.render.invalidate()}>
          render count is {rootState.count}
        </button>
        <button onClick={() => { rootState.render.updateCamAngle(2, 0.5) }}>
          cam change
        </button>
        <button onClick={() => { rootState.render.prevCamAngle() }}>
          cam prev
        </button>
        <button onClick={() => { rootState.render.nextCamAngle() }}>
          cam next
        </button>
        <button onClick={() => { rootState.ifcParser.loadFromURL("./samples/AC20-Institute-Var-2.ifc") }}>
          load Institute sample
        </button>
        <button onClick={() => { rootState.ifcParser.loadFromURL("./samples/AC20-FZK-Haus.ifc") }}>
          load Haus sample
        </button>
        <button onClick={() => { rootState.objParser.loadFromURL("./samples/20221025SantAntiniDelAbad_Llombay1M_CC0.obj") }}>
          load Church sample
        </button>
        {/* <DynButton action={state.actions.focusObject} /> */}
        <DynSlider/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
})

export default App
