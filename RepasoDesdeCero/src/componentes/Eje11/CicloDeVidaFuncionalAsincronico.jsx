import React, { useState, useEffect, Fragment } from 'react'
import axios from "axios"

const CicloDeVidaFuncionalAsincronico = () => {

    const [index, setIndex] = useState(1);
    const [personaje, setPersonaje] = useState(null);

    // useEffect(() => {}, []) con los corchetes vacios es //COMPONENTDIDMOUNT 
    // useEffect(() => {}, [index]) con los corchetes con algo//COMPONENTDIDUPDATE 

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${index}`)
        .then(res => setPersonaje(res.data))
        .catch(err => console.log(err));
    }, [index])


  return (
    <Fragment>
        <p>---Eje.12---CicloDeVidaAsincrona CompFuncional---</p>
        <div>
            <img src={personaje?.image} alt="img" />
            <h2>{personaje?.name}</h2>
        </div>
        <button onClick={() => setIndex(index + 1)}>Incrementar</button>
        <button onClick={() => setIndex(index - 1)}>Decrementar</button>
        <p>---------------------------</p>
    </Fragment>
  )
}

export default CicloDeVidaFuncionalAsincronico