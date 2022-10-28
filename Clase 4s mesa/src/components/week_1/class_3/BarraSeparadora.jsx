import React from 'react'

const BarraSeparadora = () => {
    const barras = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
  return (
    <div>
        {barras.map(barra => (
            <span>{barra}</span>
        ))}
    </div>
  )
}

export default BarraSeparadora