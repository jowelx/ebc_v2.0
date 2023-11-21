// This form is using to recovery your password if you forgot that before, you can type own adress and click on 
// 'Enviar email', an email will send you with the instructions to recovery your account

import React, { useState } from 'react'
import FormSection from "../../UI/FormSection"
import Button from "../../UI/Button"
import { usuarios } from '../../utils/database'

const index = ({setImbox}) => {

    const correos = usuarios.map(usuario => usuario.email)
    const [alert, setAlert] = useState(false)

    const [formData, setFormData] = useState({
        email: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setAlert(false)

        if (!correos.includes(formData.email)) {
            setAlert(true)
        } else {
            console.log('Datos a enviar:', formData);
            setImbox(true)
            setTimeout(() => {
                setImbox(false)
            }, 3000);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormSection 
                type="email" 
                id="email" 
                placeholder="name@example.com" 
                label="Email" 
                onChange={handleInputChange}
                value={formData.email}
            />
            {alert && <p className="text-danger">El correo no está registrado</p>}
            <Button type="submit" className="btn-success w-100">Enviar email</Button>
        </form>
    )
}

export default index