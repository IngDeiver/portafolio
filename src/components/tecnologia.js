import React from 'react'
import Img from '../styled/components/imgTecnologia'

// Es el compnente que reresenta una tecnologia usada en un proyecto
export default ({titulo, imagen}) => (

    <div className="d-flex flex-column jutisy-content-center align-items-center mx-1">
        <Img alt={titulo} fixed={imagen}/>
        <p className="mt-2 text-center">{titulo}</p>
    </div>
)