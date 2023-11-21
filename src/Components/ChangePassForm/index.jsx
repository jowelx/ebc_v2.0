// This components includes a form that change the password of your 'El buen conejo' account, here we are using
// UI components like PasswordSection and Button, their information was passed through props, finally the button type
// submit sends the information to backend

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PasswordSection from "../../UI/PasswordSection"
import Button from '../../UI/Button'

const index = ({setSuccess}) => {

  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [warning, setWarning] = useState(false)

  const [formData, setFormData] = useState({
    password: '',
    password_confirm: '',
  });

  // formData es el Body de la solicitud POST {{URL}}api/users/user_id/set_password/ --> Así se cambia la contraseña

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
    ...formData,
    [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false)
    setWarning(false)

    if (formData.password !== formData.password_confirm) {
      setError(true)
    } else if (formData.password.length < 8 || formData.password_confirm.length < 8) {
      setWarning(true)
    } else {
      setError(false)
      setWarning(false)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        navigate('/login')
      }, 3000);
      console.log('Datos a enviar:', formData)
    } 
  };

  return (
    <form onSubmit={handleSubmit}>
      <PasswordSection 
        type="password" 
        id="password" 
        placeholder="************" 
        label="Contraseña" 
        onChange={handleInputChange}
        value={formData.password}
      />
      <PasswordSection 
        type="password" 
        id="password_confirm" 
        placeholder="************" 
        label="Confirmar contraseña" 
        onChange={handleInputChange}
        value={formData.password_confirm}
      />
      {error && <p className="text-danger"> Las contraseñas no coinciden </p>}
      {warning && <p className="text-warning"> Las contraseña debe tener 8 caracteres como mínimo</p>}
      <Button type="submit" className="btn-success w-100" children="Cambiar contraseña" />
    </form>
  )
}

export default index