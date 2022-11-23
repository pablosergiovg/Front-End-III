import React, {Fragment} from 'react'
import BotonSumarRestar from './componentes/Eje1/BotonSumarRestar'
import MapearArray1 from "./componentes/Eje2/MapearArray1"
import WorkLife from "./componentes/Eje3/WorkLife"
import InfromacionPersonal from "./componentes/Eje3/InformacionPersonal"
import FuncionalComponent from "./componentes/Eje4/FunctionalComponent"
import ClassComponent from "./componentes/Eje4/ClassComponent"
import Key from "./componentes/Eje5/Key"
import CompPokemon from "./componentes/Eje6/CompPokemon"
import LocalApp from "./componentes/Eje7/LocalApp"
import LocalAppEje8 from "./componentes/Eje8/LocalAppEje8"
import LocalAppEje9 from "./componentes/Eje9/LocalAppEje9"
import CicloDeVidaCClase from './componentes/Eje10/CicloDeVidaCClase'
import CicloDeVidaClaseAsincrona from './componentes/Eje11-Eje12/CicloDeVidaClaseAsincrona'
import CicloDeVidaFuncionalAsincronico from './componentes/Eje11-Eje12/CicloDeVidaFuncionalAsincronico'


function App() {

  const misDatos = {
    nombre: "Pablo",
    apellido: "Viera"
  }
  return (
    <Fragment>
      <CicloDeVidaFuncionalAsincronico/>
      <CicloDeVidaClaseAsincrona/>
      <CicloDeVidaCClase/>
      <LocalAppEje9/>
      <LocalAppEje8/>
      <LocalApp/>
      <CompPokemon/>
      <Key/>
      <ClassComponent datos = {misDatos}/>
      <FuncionalComponent/>
      <InfromacionPersonal/>
      <WorkLife/>
      <MapearArray1/>
      <BotonSumarRestar/>
    </Fragment>
  )
}

export default App
