import React from "react";
import { useEffect } from "react";
import { useHttp } from "../../hooks/useHttp";
import { useLocation } from "react-router-dom";
import { apiUrls } from "../../utils/links";
import styles from "../InfocardRabbit/infocard.module.css";

const Infocard = () => {
  const rabbitId = useLocation().pathname.split("/").pop();
  const { isLoading, error, data, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest(`${apiUrls.urlRabbits}${rabbitId}/`);
  }, [sendRequest, rabbitId]);

  if (isLoading) {
    return <h2 className="text-muted text-center m-5 p-5">Cargando...</h2>;
  }

  const dataInfoRabbit = () => {
    if (!isLoading && data) {
      return {
        nombre: data.tag,
        raza: data.breed,
        genero: data.genre,
        fechaNacimiento: data.birthday,
        edad: data.age,
        peso: data.weight,
        precio: data.price,
      };
    }
    return {};
  };
  return (
    <>
      {!isLoading && data && (
        <div className="d-flex justify-content-around">
          <div
            className="card rounded-4 shadow p-1"
            id={styles.cardinfoRabbits}
          >
            <div className="card-body p-2" id={styles.nameRabbits}>
              <strong>Raza</strong>
              <h6 id={styles.parentsRabbits}>{data.breed}</h6>
            </div>
          </div>
          <div
            className="card rounded-4 shadow p-1"
            id={styles.cardinfoRabbits}
          >
            <div className="card-body p-2" id={styles.nameRabbits}>
              <strong>Precio</strong>
              <h6 id={styles.parentsRabbits}>{data.price}</h6>
            </div>
          </div>
          <div
            className="card rounded-4 shadow p-1"
            id={styles.cardinfoRabbits}
          >
            <div className="card-body p-2" id={styles.nameRabbits}>
              <strong>Edad</strong>
              <h6 id={styles.parentsRabbits}>{data.age}</h6>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Infocard;
