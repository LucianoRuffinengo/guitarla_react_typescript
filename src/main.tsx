import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// ReactDOM.createRoot(document.getElementById('root')) ->este error se da porque
                                                       // TS lo toma como un tipo de dato
                                                       // o null y en TS no se permite que
                                                       // sea null, hay dos formas de solucion
//ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
//ReactDOM.createRoot(document.getElementById('root')!)-> Assertion not null/non null assertion operator