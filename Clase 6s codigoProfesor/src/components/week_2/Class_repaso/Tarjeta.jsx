import React, {Fragment} from 'react'
import ListaPoderes from './ListaPoderes';


const getColors = (tipo) => {
    switch (tipo) {
        case "fire":
            return {
                borderColor: "#5A0E1A",
                bgColor: "#B3001B",
            }
        case "water":
            return {
                borderColor: "#255C99",
                bgColor: "#7EA3CC",
            }
        case "rock":
            return {
                borderColor: "#262626",
                bgColor: "#C6C6C6",
            }
        default:
            return
    }
}

const getStyle = (tipo) => {

    const { borderColor, bgColor } = getColors(tipo);

    const styles = {
        border: `3px solid ${borderColor}`,
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        padding: "20px",
        width: "200px",
        backgroundColor: `${bgColor}`,
        borderRadius: "20px",
        gap: "20px"
    }

    return styles;
}

const Tarjeta = ({data, tipo}) => {
    console.log(data);

  return (
    <>
        {
            data.map(pokemon => (
                <div key={pokemon.id} style={getStyle(tipo)}>
                    <h2>{pokemon.pokemonName}</h2>
                    <div style={{ width: "120px", margin: "0 auto" }}>
                        <img src={pokemon.avatar} alt={pokemon.pokemonName} style={{width:"100%"}}/>
                    </div>
                    {pokemon.power && (<ListaPoderes power={pokemon.power}/>)}
                </div>
            ))
        }
        
    </>
  )
}

export default Tarjeta