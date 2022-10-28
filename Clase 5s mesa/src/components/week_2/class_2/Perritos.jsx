import React from 'react'

const perros = [
    {
        id: 1,
        nombre: "Firulais",
        edad: 11,
        sexo: "Macho",
        raza: "Pastor Aleman",
        tamanio: "Grande"
    },
    {
        id: 2,
        nombre: "Maya",
        edad: 13,
        sexo: "Hembra",
        raza: "Pug",
        tamanio: "Chico"
    },{
        id: 3,
        nombre: "Pipo",
        edad: 5,
        sexo: "Macho",
        raza: "Schnauzer",
        tamanio: "Mediano"
    },{
        id: 4,
        nombre: "Pacha",
        edad: 2,
        sexo: "Hembra",
        raza: "Mestizo",
        tamanio: "Chico"
    }
]

const Perritos = () => {
    //Bonus - Don't kill yourself.
    //const [arrOfFruits, setArrOfFruits] = useState(perros)
    //METHOD
    //MAP => FUNCIÓN PARA MANEJO DE ESTADO INMUTABLES
    //FILTER

    return (
        <div>
            <h1>Clientes caninos de Veterinaria</h1>
                {
                    perros.map((item, index) => (
                        <div key={item.id}>
                            <h2>{item.nombre}</h2>
                            <ul>
                                <li>{item.edad}</li>
                                <li>{item.sexo}</li>
                                <li>{item.raza}</li>
                                <li>{item.tamanio}</li>
                            </ul>
                        </div>
                    ))
                }
        </div>
    )
}

export default Perritos