import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RootState from './state/RootState.js'
import './index.css'
import { configure as mobxconfig} from "mobx"

// Turn on strict mode to generate runtime warnings
mobxconfig({
  enforceActions: "always",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  // disableErrorBoundaries: true // first reaction error escapes through the action call
})


const state = new RootState()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App state={ state }/>
  </React.StrictMode>,
)
