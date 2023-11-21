import React, {useState} from "react";

const CardNotesRabbit = ({ title, content, onDelete }) =>{

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

  const handleDelete = () => {
    onDelete();
  }; 

    return <>
        <div className="card mt-2">
      <h4 className="mt-2">{title}</h4>
      <p>{content}</p>
      <div className="dropdown mb-3 d-flex justify-content-end">
      {/* Icono que activa el dropdown */}
      <img
        src="https://static.thenounproject.com/png/3137368-200.png"
        alt="Icono"
        width="30"
        height="30"
        onClick={toggleDropdown}
      />
      <i className="fas fa-ellipsis-v"></i>
      {/* Contenido del dropdown */}
      {isDropdownOpen && (
        <div className="dropdown-content">
          {/* Botón de eliminar */}
          <button className="delete-button" onClick={handleDelete}>
            Eliminar
          </button>
          <div className="menu-item">
      <img className="trash-simple" src="img/trash-simple.svg" />
      <div className="text">Eliminar</div>
    </div>
        </div>
      )}
    </div>
      
    </div>
    </>
}

export default CardNotesRabbit