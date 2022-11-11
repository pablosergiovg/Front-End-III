import React, { useState } from 'react'

const ContadorCalcu = () => {

    const [cuenta,setCuenta] = useState(1)

    const sumar = () => {
        const resultado = cuenta + 1.0;
        comprobarResultado(resultado)
    }

    const restar = () => {
        const resultado = cuenta - 1.0;
        comprobarResultado(resultado)
    }

    const dividir = () => {
        const resultado = cuenta / cuenta;
        comprobarResultado(resultado)
    }

    const multiplicar = () => {
        const resultado = cuenta * cuenta;
        comprobarResultado(resultado)
    }

    const comprobarResultado = resultado => {
        if(resultado >= 1 && resultado <= 50){
            setCuenta(valorPrevio => valorPrevio = resultado)
        }
    }


  return (
    <div>
        <p>{cuenta}</p>
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
        <button onClick={dividir}>dividir</button>
        <button onClick={multiplicar}>multiplicar</button>
    </div>
  )
}

export default ContadorCalcu