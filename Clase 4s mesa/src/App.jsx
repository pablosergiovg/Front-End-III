
import React, { Fragment } from 'react'
import Header from './components/week_1/class_3/Header'
import PersonalInformation from './components/week_1/class_3/PersonalInformation'
import WorkLife from './components/week_1/class_3/WorkLife'
import Footer from './components/week_1/class_3/Footer'
import Mailing from './components/week_1/class_3/Mailing'
import BarraSeparadora from './components/week_1/class_3/BarraSeparadora'
import PersonajesFavoritos from './components/week_1/class_3/PersonajesFavoritos'
import ClassComponent from './components/week_2/class_1/ClassComponent'
import FuncionalComponent from './components/week_2/class_1/FuncionalComponent'
import MockComponent from './components/week_2/class_1/MockComponent'
//MESA CLASE 4
import ComponenteClase from './components/week_2/class_1/ComponenteClase'
import ComponenteFuncional from './components/week_2/class_1/ComponenteFuncional'

import Keys from './components/week_2/class_2/Keys'


const App = () => {
    const greeting = {
        hello: "Soy componente de clase",

        subText: "Soy el hijo de ClassComponent"
    }

    const mesa = {
        clase: "soy Clase",
        funcional: "soy Funcional"
    }

    return (
    <div>
        <Header/>
        <BarraSeparadora/>
        <PersonalInformation/>
        <WorkLife/>
        <Mailing/>
        <Footer/>

        <PersonajesFavoritos/>
        <ClassComponent saludo={greeting} />
        <FuncionalComponent/>
        <MockComponent message={"soy hijo de app, pero no soy el mismo."} />
        
        <ComponenteClase mesa = {mesa}/>
        <ComponenteFuncional mesa = {mesa}/>
    
    </div>
    )
        subText: "Soy el hijo de Class Component"
}
return <Keys />


export default App