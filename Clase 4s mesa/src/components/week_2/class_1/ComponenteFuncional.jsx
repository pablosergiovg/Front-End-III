import React from 'react'
import CompoonentePlantilla from './CompoonentePlantilla'

const ComponenteFuncional = (props) => {
    const { mesa } = props;
  return (
    <div>
        <h1>ComponenteFuncional {mesa.funcional}</h1>
        <CompoonentePlantilla message = "Soy hijo de Funcional"/>
    </div>
  )
}

export default ComponenteFuncional