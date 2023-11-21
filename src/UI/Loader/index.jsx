import React from "react";
import { ClipLoader } from "react-spinners";// Importa los estilos de Bootstrap

const Loader = (active) => {
  return (
    active.active && (
      <div className="d-flex align-items-center justify-content-center top-0 left-0 right-0 bottom-0 w-100 h-25" style={{ backdropFilter: 'blur(10px)', zIndex: 20 }}>
        <ClipLoader color="#FFFFFF" />
      </div>
    )
  );
};

export default Loader;
