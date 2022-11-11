import React, { useState } from 'react'
import style from "./Styles/style.module.css"

const Counter = ({ counterP, handleIncrementCounter }) => {

const [count, setCount] = useState(0);

const handleIncrement = () => {
    setCount(valorPrevio => valorPrevio + 1)
}

  return (
    <div className={style['counterContainer']}>
        <button onClick={handleIncrementCounter}>Incrementar</button>
        <p>{counterP}</p>
    </div>
  )
}

export default Counter