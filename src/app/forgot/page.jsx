// This component includes the form to recovery your password and at header was added to guide the use and this 
// component acts like a route of our website, more specific the route /forgot
'use client'
import { useContext, useState } from 'react'
import ForgotForm from "../../Components/ForgotForm"
import Heading from '../../UI/Heading'
import Paragraph from '../../UI/Paragraph'
import ReviewEmail from '../../Components/ReviewEmail'

const Index = () => {

    const [imbox, setImbox] = useState(false)

    return (
        <div className="container">
            {imbox && <ReviewEmail />}
            <div className="col-md-6 justify-content-center mx-auto border p-3 my-4 mb-5">
                <Heading className="text-center"> ¿Olvidaste la contraseña? </Heading>
                <Paragraph className="text-center">
                    Introduce el email que utilizaste al registrarte y te enviaremos
                    instrucciones para reestablecer tu contraseña
                </Paragraph>
                <ForgotForm setImbox={setImbox} />
            </div>
        </div>
    )
}

export default Index