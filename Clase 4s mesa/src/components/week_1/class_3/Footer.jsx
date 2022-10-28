import React from 'react'
import { generalInformation } from './db'

const Footer = () => {
    const [informacion] = generalInformation;
    return (
    <footer>
        <p>{informacion.nationality}</p>
        <p>{informacion.age}</p>
    </footer>
    )
}

export default Footer