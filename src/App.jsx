import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { observer } from "mobx-react"
import { useRef, useEffect } from 'react'

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
      <div className="card">
        <button onClick={() => state.render.invalidate()}>
          render count is {state.count}
        </button>
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
