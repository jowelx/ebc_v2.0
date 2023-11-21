import React, { useState } from 'react'

const index = ({id, placeholder, label, onChange}) => {

    const [state, setState] = useState(false)

    return (
        <div className="mb-2">
            <label htmlFor={id} className="form-label">{label}</label>
            <div className="position-relative d-flex align-items-center">
                <input 
                    type={state ? "text" : "password"}
                    className="form-control"
                    aria-describedby="inputGroupPrepend"
                    id={id} 
                    placeholder={placeholder}
                    onChange={onChange}
                    required
                />
                <img 
                src={`/assets/${state ? 'open' : 'close'}.png`} alt="check" 
                className="h-100 position-absolute end-0 btn pointer"
                onClick={() => setState(!state)}
                />
                <div className="invalid-feedback">
                    Por favor escribe un {label}
                </div>
            </div>
        </div>
    )
}

export default index