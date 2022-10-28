import React from 'react'
import { generalInformation } from './db'

const Mailing = () => {
    const [informacion] = generalInformation;
  return (
    <div>
        <h3>Mail: {informacion.mail}</h3>
    </div>
  )
}

export default Mailing