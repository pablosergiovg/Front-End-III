import React from 'react'

const MockComponent = (props) => {

    const { nombre, apellido} = props.mensaje

  return (
    <div>
        <p>MockComponent:</p>
        <p>Este mensaje viene desde ClassComponent: {nombre} {apellido}</p>
    </div>
  )
}

export default MockComponent