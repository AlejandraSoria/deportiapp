import React from 'react'
import './HolaMundo.css'



class HolaMundo extends React.Component{
    render(){
        return (
            <div>
            {/* <p>Hola Mundo</p> Comentario de bloque */}
            <h2>Hola {this.props.nombre}</h2>
            <p>edad: {this.props.edad}</p>
            <p className={this.props.tipo}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
            </div>
        )
    }
}

export default HolaMundo
