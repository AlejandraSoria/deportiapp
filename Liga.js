import React, { Component } from 'react'

// Estilos
import './Ligas.css'

// Componentes
import Equipo from './src/components/common/equipo/Equipo'
import Jugador from './src/components/common/jugador/Jugador'

// Imagenes Equipos 
import LogoFelinos from './src/assets/logos/felinos.png'
import LogoPiratas from './src/assets/logos/piratas.png'
import LogoTiburones from './src/assets/logos/tiburones.png'

// Imagenes Jugadores
import FotoSergio from './src/assets/fotos/sergio.png'
import FotoManuel from './src/assets/fotos/manuel.png'
import FotoJose from './src/assets/fotos/jose.png'
import FotoPaco from './src/assets/fotos/paco.png'

class Liga extends Component {
    render(){
        return(
            <div className="contenedor">
                <div className="lista-equipos">
                    <Equipo nombre="Felinos" logo={LogoFelinos} />
                    <Equipo nombre="Piratas" logo={LogoPiratas} />
                    <Equipo nombre="Tiburones" logo={LogoTiburones} />
                </div>
                <div className="lista-jugadore">
                    <Jugador nombre="Sergio" foto={FotoSergio} />
                    <Jugador nombre="Manuel" foto={FotoManuel} />
                    <Jugador nombre="Jose" foto={FotoJose} />
                    <Jugador nombre="Paco" foto={FotoPaco} />
                </div>
            </div>
        )
    }
}

export default Liga
