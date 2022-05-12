import React from 'react'

import { Outlet, Link, useParams } from 'react-router-dom'

export default function UsersList() {
    const { name } = useParams()
    return (
        <div>
            <h1>Listado de Usuarios</h1>
            {name}
            <Link to='details'>Ir a los detalles</Link>
            <Outlet />
        </div> 
    )
}

 // Este name viene del /users-list/:name
  // Con esta info, podemos usarlo para llamar a una API y obtener
  // información

  // Tiene que ser details sin '/' para que sea una ruta relativa
  // y conserve lo anterior