import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Login() {
    
    const isLogged = false

    return(
             
        <div className="Login-container">
            {
                isLogged
                ? <Link to='/logout'>
                    logout
                </Link>
                : <Link to='login'>
                    Login
                </Link>
            }
            
        </div>
        
    )
}