import React, { useState } from 'react'

const BotonSumarRestar = () => {

    const [count, setCount] = useState(0);

    const handleSumar = () => {
        return setCount(count + 1);
    }

    const handleRestar = () => {
        return setCount(count > 0 ? count - 1 : count);
    }

  return (
    <div>
        <p>---Eje.1---BotonSumarRestar---</p>
        <p>La cuenta va en {count}</p>
        <button onClick={handleSumar}>sumar</button>
        <button onClick={handleRestar}>restar</button>
        <p>---------------------------</p>
    </div>
  )


}

export default BotonSumarRestar