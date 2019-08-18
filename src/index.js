import React from 'react'
import { render } from 'react-dom'
// import serviceWorker from './serviceWorker'

// Material 
// import Reboot from 'material-ui/Reboot'

// Estilos
import './index.css'

// Componentes
import Header from './components/common/header/Header'
import Liga from './components/liga/Liga'
import Calendario from './components/calendario/Calendario'

// El codigo
const Root = () => {
    return (
        <div>
            {/* <Reboot />  */}
            <Header />
            <div className="contenedor">
                <Liga />
                <Calendario /> 
            </div>
        </div>
    )
}



render(<Root />, document.querySelector('#root'))

