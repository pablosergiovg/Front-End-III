import React, { Fragment } from 'react'
import { styleDivContenedor } from './style'
import CompTarjeta from './CompTarjeta'
import { Pokemon } from './dbPokemons'

const CompPokemon = () => {

  const tiposDePokemon = Object.keys(Pokemon);

  return (
    <Fragment>
    <p>---Eje.6---Keys/Maps/Pokemon---</p>
    <div style={styleDivContenedor}>
      {
        tiposDePokemon.map((tipo, index) => (
          <CompTarjeta 
            key={index + Pokemon[tipo]}
            data={Pokemon[tipo]}
          />
        ))
      }
    </div>
    <p>---------------------------</p>
    </Fragment>
  )
}

export default CompPokemon