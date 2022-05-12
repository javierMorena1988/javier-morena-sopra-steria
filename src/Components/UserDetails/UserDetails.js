import React, { useState } from "react";

import { useParams } from "react-router-dom";

export default function UserDetails() {
    // const { name } = useParams()
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    console.log(name, email)

    return (
        <>
        <div className="formItem">
            <input 
                className="formInput"
                type="text"
                placeholder="john"
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                className="formInput"
                type="text"
                placeholder="john@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        </>
    )
}