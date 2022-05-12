import React from 'react'
import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import axios from 'axios'

const UsersList = () => {
    const [data, getData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://reqres.in/api/users')

                getData(response.data)
            }
            catch (error){
                console.error(error.message)
            }
        }
        fetchData()
    }, [])


    return (
        <div>
            <h1>Listado de Usuarios</h1>
            {/* {name} */}
            <div className='listado'>
                <ul>
                    {data.data?.map(user => { 
                        return(
                            <li key={user.id}>
                                <span>{user.name}</span>
                            </li>
                        )})
                    }
                </ul>
            </div>
            <Link to='details'>Ir a los detalles</Link>
            <Outlet />
        </div> 
    )
}

export default UsersList