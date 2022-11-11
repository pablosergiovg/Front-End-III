import React, { useState } from 'react'

const MapearArray1 = () => {

    const menuList = ["Home", "Abaut", "Contact", "Email us"];

    const colorPicket = (index) => {
        switch (index) {
            case 0:
                return { color: "blue"}
            case 1:
                return { color: "green"}
            case 2:
                return { color: "red"}
            case 3:
                return { color: "violet"}
            default:
                break;
        }
    }

  return (
    <header>
        <nav>
            <p>---Eje.2---MapearArray1---</p>
            <ul>
                {
                    menuList.map((item, index) => (
                        <li key={index} style={colorPicket(index)} >{item}</li>
                    ))
                }
            </ul>
            <p>---------------------------</p>
        </nav>
    </header>
  )
}

export default MapearArray1