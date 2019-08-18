import React, { Component } from 'react'

// Material
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'

class Jugador extends Component{
    render(){
        return(
            <div>
                <Card className="card">
                    <CardMedia
                        className="media"
                        image={ this.props.foto }
                        title="Felinos"
                    />
                    <CardContent>
                        <Typography variant="h2" component="elementType" align="center" color="primary">
                            {this.props.nombre}
                        </Typography>
                    </CardContent>    
                </Card>
            </div>
        )
    }
}

export default Jugador