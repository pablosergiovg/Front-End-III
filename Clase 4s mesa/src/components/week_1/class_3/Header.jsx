import React from 'react'

const Header = () => {
const menu = ["informacion personal", "peliculas", "series", "premio"];
  return (
    <header>
        <nav>
            <ul>
                {menu.map((item, index) => (
                    <li key={index} style={{textTransform:"capitalize"}} >{item}</li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Header