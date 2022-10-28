import React from 'react'
import { generalInformation } from './db'

const PersonalInformation = () => {
    const [informacion] = generalInformation;
  return (
    <main>
        <h1>{informacion.name}</h1>
        <img src={informacion.avatar} alt="FotoPerfil" />
    </main>
  )
}

export default PersonalInformation