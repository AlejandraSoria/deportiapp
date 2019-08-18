import React from 'react'
import { render } from 'react-dom'
// import serviceWorker from './serviceWorker'
import HolaMundo from './components/hola-mundo/HolaMundo'
import './index.css'




render(<HolaMundo nombre="Sergio" edad="25" tipo="descripcion"/>, document.querySelector('#root'))

