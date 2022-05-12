import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Login.css'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // alert(`${username}, ${password}`)
        navigate('/users-list', {replace: true})
    }

    return (             
        <form onSubmit={handleSubmit}>
            <input placeholder='username' 
                onChange={e => setUsername(e.target.value)}
                value={username}
            />
            <input type='password'
                placeholder='password'
                onChange={e=> setPassword(e.target.value) }
                value={password}
            />            
            <button>Login</button>
        </form>         
    )
}