import React, { Fragment, useState } from 'react'
import { productos } from './arrayDeProductos';

const Productos = () => {

    const [listaProductos, setListaProductos] = useState(productos);

    const eliminarProducto = (key) => {
        const nuevaLista = listaProductos.filter(producto => producto !== key)
        setListaProductos(nuevaLista)
    }

  return (
    <div>
        {
            listaProductos.map(producto => (
                <div key={producto}>
                    <li>{producto}</li>
                    <button onClick={() => eliminarProducto(producto)}>eliminar {producto}</button>
                </div>
            ))
        }
    </div>
  )
}

export default Productos