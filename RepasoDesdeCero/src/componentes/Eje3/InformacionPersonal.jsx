import React from 'react'
import { generalInformation } from './dbEje3'

const InformacionPersonal = () => {

    const [ informacionPersonal ] = generalInformation;

  return (
    <div>
        <p>---Eje.3---InformacionPersonal---</p>
        <p style={{textTransform:"uppercase"}}>{informacionPersonal.name}</p>
        <p>{informacionPersonal.nationality}</p>
        <img style={{width: "100px"}} src={informacionPersonal.avatar} alt="foto"/>
    </div>
  )
}

export default InformacionPersonal