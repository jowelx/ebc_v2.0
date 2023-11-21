import React, {useState} from "react";
import CardRabbit from "../CardRabbit/CardRabbit";

const MenuRabbitCamada = () =>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };
    
    return<>
    <div>
    <div className="dropdown">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" onClick={toggleDropdown}>
          Todas
        </a>
        <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
        aria-labelledby="dropdownMenuButton" style={{
            top: '100%', // Coloca el menú debajo del botón
            left: 0, // Alinea el menú a la izquierda
          }}>
          <li><a className="dropdown-item" href="#">Todas</a></li>
          <li><a className="dropdown-item" href="#">Activas</a></li>
          <li><a className="dropdown-item" href="#">Inactivas</a></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-end">
      <button type="button" class="btn btn-success m-1">Agregar camada</button>
        </div>
      </div>
      <div className="container mt-2">
        <div className="row">
            <div className="col-md-4 mt-2">
                <CardRabbit/>
            </div>
            <div className="col-md-4 mt-2">
                <CardRabbit/>
            </div>
            <div className="col-md-4 mt-2">
                <CardRabbit/>
            </div>
            <div className="col-md-4 mt-2">
                <CardRabbit/>
            </div>
            <div className="col-md-4 mt-2">
                <CardRabbit/>
            </div>
            <div className="col-md-4 mt-2">
                <CardRabbit/>
            </div>
        </div>
      </div>
    </div>
    </>
}

export default MenuRabbitCamada