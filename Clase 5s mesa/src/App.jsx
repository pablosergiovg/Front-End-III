import React, { Fragment } from 'react'
import Keys from './components/week_2/class_2/Keys'
import Perritos from './components/week_2/class_2/Perritos'

const App = () => {
    const greeting = {
        hello: "Soy componente de clase",
        subText: "Soy el hijo de Class Component"
    }
    return <Perritos />
}

export default App