import React, { Fragment } from 'react'
import CompPowerList from './CompPowerList'
import { styleDiv, styleImg } from './style'

const CompTarjeta = ({data}) => {

    //console.log(data);
    
  return (
    <Fragment>
        {
          data.map(pokemon => (
            <div key={pokemon.id} style={styleDiv}>
              <p>{pokemon.pokemonName}</p>
              <img style={styleImg} src={pokemon.avatar} alt={pokemon.pokemonName} />
              <ul>
                {
                  pokemon.power && (<CompPowerList listaPoderes={pokemon.power} />)
                }
              </ul>
            </div>
          ))
        }
    </Fragment>
  )
}

export default CompTarjeta