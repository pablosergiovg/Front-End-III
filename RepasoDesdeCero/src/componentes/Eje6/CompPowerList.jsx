import React from 'react'

const CompPowerList = ({listaPoderes}) => {

    //El Object.Key(objeto) sirve para transformarlo en array y poder iterar.
    const arrDePoderes = Object.keys(listaPoderes)

  return (
    <ul style={{textAlign: "left"}}>
        {
            arrDePoderes.map((poder, index) => (
                <li key={poder+index}>{listaPoderes[poder]}</li>
            ))
        }
    </ul>
  )
}

export default CompPowerList