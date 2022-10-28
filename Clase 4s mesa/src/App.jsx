import React from 'react'
import PersonalInformation from './components/week_1/class_3/PersonalInformation'
import WorkLife from './components/week_1/class_3/WorkLife'
import Footer from './components/week_1/class_3/Footer'
import Mailing from './components/week_1/class_3/Mailing'
import BarraSeparadora from './components/week_1/class_3/BarraSeparadora'


//MESA CLASE 4
import ComponenteClase from './components/week_2/class_1/ComponenteClase'
import ComponenteFuncional from './components/week_2/class_1/ComponenteFuncional'

const App = () => {

    const mesa = {
        clase: "soy Clase",
        funcional: "soy Funcional"
    }

    return (
    <div>
        <BarraSeparadora/>
        <PersonalInformation/>
        <WorkLife/>
        <Mailing/>
        <Footer/>
        <ComponenteClase mesa = {mesa}/>
        <ComponenteFuncional mesa = {mesa}/>
    </div>
    )
}
export default App