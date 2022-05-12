import React from "react";

import { useParams } from "react-router-dom";

export default function UserDetails() {
    const { name } = useParams()
    return (
        <h1>Detalle del usuario {name}</h1>
    )
}