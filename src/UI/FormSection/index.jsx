import React from 'react'

const index = ({type, id, placeholder, label, onChange}) => {
  return (
    <div className="mb-2">
      <label htmlFor={id} className="form-label">{label}</label>
      <input 
        type={type} 
        className="form-control"
        aria-describedby="inputGroupPrepend"
        id={id} 
        placeholder={placeholder}
        onChange={onChange}
        required
      />
      <div className="invalid-feedback">
        Por favor escribe un {label}
      </div>
    </div>
  )
}

export default index