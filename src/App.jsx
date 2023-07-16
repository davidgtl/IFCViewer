import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { observer } from "mobx-react"
import { useRef, useEffect } from 'react'
import DynButton from "@/components/DynButton"
import { svgs }  from 'svgSymbols'

import './App.css'

const App = observer(({ state }) => {

  const canvasContainerRef = useRef(null)

  useEffect(() => {
    const container = canvasContainerRef.current
    container.appendChild(state.render.domElement)
  }, [])

  return (
    <>
      <div ref={canvasContainerRef} />
      <h1>Vite + React</h1>
      <div className="card" style={{ 'maxWidth': '640px' }}>
        <button onClick={() => state.render.invalidate()}>
          render count is {state.count}
        </button>
        <button onClick={() => { state.render.updateCamAngle(2, 0.5) }}>
          cam change
        </button>
        <button onClick={() => { state.render.prevCamAngle() }}>
          cam prev
        </button>
        <button onClick={() => { state.render.nextCamAngle() }}>
          cam next
        </button>
        <button onClick={() => { state.ifcParser.loadFromURL("./samples/AC20-Institute-Var-2.ifc") }}>
          load Institute sample
        </button>
        <button onClick={() => { state.ifcParser.loadFromURL("./samples/AC20-FZK-Haus.ifc") }}>
          load Haus sample
        </button>
        <button onClick={() => { state.objParser.loadFromURL("./samples/20221025SantAntiniDelAbad_Llombay1M_CC0.obj") }}>
          load Church sample
        </button>
        <DynButton action={{
          name: "Focus Object",
          tick: () => console.log("Focusing Object"),
          symbol: svgs.focusObject
        }} />
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
