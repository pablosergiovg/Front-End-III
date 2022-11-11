import React, { useState } from 'react'

const fruits = [
    {
        id: 1,
        value: "Apples"
    },
    {
        id: 2,
        value: "Pears"
    },
    {
        id: 3,
        value: "Watermelons"
    },
    {
        id: 4,
        value: "Oranges"
    }
]

const Key = () => {

    const [arrDeFrutas, setArrDeFrutas] = useState(fruits);

    const eliminar = (item) => {
         
        const newArrDeFrutas = arrDeFrutas.filter(i => i !== item);
        setArrDeFrutas(newArrDeFrutas);
        console.log(newArrDeFrutas);
        
    }

  return (
    <div>
        <p>---Eje.5---Keys/Maps/Filter---</p>
        <ul>
            {
                arrDeFrutas.map((item, index) => (
                    <li key={item.id}>
                        <button onClick={() => eliminar(item)}>Eliminar</button>
                        <label>{item.value}</label>
                        <input defaultValue={item.value} readOnly />
                    </li>
                ))
            }
        </ul>
        <p>---------------------------</p>
    </div>
  )
}

export default Key