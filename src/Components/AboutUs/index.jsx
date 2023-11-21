import React from 'react'
import { participantes } from '../../utils/participants.js'
import Participants from '../../UI/Participants/index.jsx'

const index = () => {
  return (
    <main className="about-us">
        <div className="d-flex flex-column align-items-center">
            <h1 className="font-weight-bold display-4 text-center pb-4">
            Conoce a Nuestro Team
            </h1>
            <p className="lead text-center w-75">Descubre quiénes somos, lo que hacemos y por qué somos apasionados por lo que hacemos. ¡Estamos ansiosos por conocerte!</p>
            <div className="d-flex flex-wrap gap-4 mt-4 justify-content-center">
            {participantes.map((participante, index) => (
                <Participants
                key={index}
                nombre={participante.nombre}
                rol={participante.rol}
                linkedin={participante.linkedin}
                github={participante.github}
                col={`col-sm-6 col-lg-3`}
                headshot={participante.headshot}
                />
            ))}
            </div>
        </div>
    </main>
  )
}

export default index