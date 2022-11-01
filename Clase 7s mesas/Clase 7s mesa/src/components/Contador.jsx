import React, { useState } from 'react'

const Contador = () => {

    const [ count, setCount ] = useState(1);

    const suma = () => {
        const resultado = count + 1;
        comprobarRangos(resultado)
    }

    const restar = () => {
        const resultado = count - 1;
        comprobarRangos(resultado)
    }

    const multiplicar = () => {
        const resultado = count * count;
        comprobarRangos(resultado)
    }

    const division = () => {
        const resultado = count / count;
        comprobarRangos(resultado)
    }

    const comprobarRangos = resultado => {
        if(resultado >= 1 && resultado <= 50){
            setCount(count => (count = resultado))
            console.log("funciona");
        }
    }


    return (
    <div>
        <h3>Contador</h3>
        <p>{count}</p>
        <button onClick={suma}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={division}>Dividir</button>
    </div>
  )
}

export default Contador