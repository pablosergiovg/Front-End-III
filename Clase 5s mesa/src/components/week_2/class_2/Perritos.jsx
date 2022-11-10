import React from 'react'
import { perros } from './ListaPerritos'

const Perritos = (props) => {
    
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