import React, { useState } from 'react'
import Counter from './Counter'
import CounterOtro from './CounterOtro';


const LocalApp = () => {

    //estados de los componentes
    const [mostrarComponente, setMostrarComponente] = useState(null);


    //MANTENER esto es para mantener el estado de los componentes con el valor que quedaron.
    //DESDEAQUI 
    const [ counterP, setCounterP ] = useState(0);
    const [ counterOtroP, setCounterOtroP ] = useState(0);

    //handlerCounter
    const handleIncrementCounter = () => {
        setCounterP(valorPrevio => valorPrevio + 1)
    }

    //handlerCounterOtro
    const handleIncrementCounterOtro = () => {
        setCounterOtroP(valorPrevio => valorPrevio + 1)
    }

    //CHILDPROPS 
    //child props para Counter (bolsito para pasar por props)
    const counterChildProps = {
        counterP,
        handleIncrementCounter
    }

    //child props para CounterOtro (bolsito para pasar por props)
    const counterOtroChildProps = {
        counterOtroP,
        handleIncrementCounterOtro
    }
    //HASTAAQUI 


    //metodo para renderizar, este preguntará a mostrarComponente(estado actual) que valor tiene, este valor está siendo cambiado cuando presionamos el boton gracias a la funcion handleSelectComponent.

    const renderComponent = () => {
        if(mostrarComponente === "Counter"){
            return <Counter {...counterChildProps}/>
        }
        if(mostrarComponente === "CounterOtro"){
            return <CounterOtro {...counterOtroChildProps}/>
        }
        return <h5>Elija un Componente</h5>
    }

    //este metodo es el que cambia el estado mediante el setMostrarComponente que recibe un argumento dado por el boton que se seleccione.
    const handleSelectComponent = (argumento) => {
        setMostrarComponente(argumento)
    }

    //a los botones se les coloca el evento onClick, al cual se le pasa el metodoHandleSelectComponent y se le coloca el argumento corresponiendo el boton con lo que se colocó en las condicionales del metodo renderComponent.
  return (
    <div>
        <p>---Eje.7---useState/estadoGlobal---</p>
        {renderComponent()}
        <button onClick={() => handleSelectComponent("Counter")}>Mostrar componente Counter</button>
        <button onClick={() => handleSelectComponent("CounterOtro")}>Mostrar componente CounterOtro</button>
        <button onClick={() => handleSelectComponent("null")}>Quitar componente</button>
        <p>---------------------------</p>
    </div>
  )
}

export default LocalApp