import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchPage () {
    const tacos = [
      'cochinita',
      'chili',
      'carnita',
      'quesadilla'
    ]
  
    return(
      <div>
        <h1>SearchPage</h1>
          <ul>
            {tacos.map(taco => (
              <li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
            ))}          
        </ul>
      </div>
  
    )
}