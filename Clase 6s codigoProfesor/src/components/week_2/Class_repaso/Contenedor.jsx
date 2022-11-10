import React from 'react'
import { Pokemon } from '../pokemons'
import Tarjeta from './Tarjeta'


const Contenedor = () => {
    const tipoPokemones = Object.keys(Pokemon)
  return (
    <div>
        <h1>Tarjetas Pokemon</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "space-evenly" }}>
            {
                tipoPokemones.map((tipo, index) => (
                    <Tarjeta key={Pokemon[tipo][index].id }
                    data = {Pokemon[tipo]}
                    tipo= {tipo}
                    />
                ))
            }
        </div>
        
    </div>
  )
}

export default Contenedor