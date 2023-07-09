import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RootState from './state/RootState.js'
import './index.css'

const state = new RootState()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App state={ state }/>
  </React.StrictMode>,
)
