import React, { useState } from 'react'
import style from "./Styles/style.module.css"


const CounterOtro = ({counterOtroP, handleIncrementCounterOtro}) => {

    const [ countOtro, setCountOtro ] = useState(0);

    const handleIncrement = () => {
        setCountOtro(valorPrevio => valorPrevio + 1)
    }


  return (
    <div className={style['counterContainer']}>
        <button onClick={handleIncrementCounterOtro} style={{backgroundColor: "yellow"}}>IncrementarOtro</button>
        <p>{counterOtroP}</p>
    </div>
  )
}

export default CounterOtro