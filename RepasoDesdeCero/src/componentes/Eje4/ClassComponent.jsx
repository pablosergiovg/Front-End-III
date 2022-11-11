import React, { Component } from "react";
import MockComponent from "./MockComponent";

class ClassComponent extends Component{

    constructor(props){
        super(props);
    }

    render(){

        const { datos } = this.props;
        const { nombre, apellido} = datos;

        return(
            <div>
                <p>---Eje.4---TiposDeComponentes---</p>
                <p>Componente de Clase codeado por {nombre} {apellido}</p>
                <MockComponent mensaje = {datos}/>
            </div>
        )
    }

}
export default ClassComponent;