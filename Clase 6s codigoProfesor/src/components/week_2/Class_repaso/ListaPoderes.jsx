import React from 'react'

const ListaPoderes = ({power}) => {
    const poderes = Object.keys(power)
  return (
    <ul style={{ listStyle: "none", padding: "0" }}>
        {
            poderes.map((poder, index) => (
                <li key={poder+index}>{power[poder]}</li>
            ))
        }
    </ul>
  )
}

export default ListaPoderes