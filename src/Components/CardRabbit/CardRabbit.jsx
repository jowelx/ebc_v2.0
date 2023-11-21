import React from "react";
import { useEffect } from "react";
import { useHttp } from "../../hooks/useHttp";
import { useLocation } from "react-router-dom";
import { apiUrls } from "../../utils/links";
import styles from "../CardRabbit/CardRabbit.module.css";
const CardRabbit = () => {
  const rabbitId = useLocation().pathname.split("/").pop();
  const { isLoading, error, data, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest(`${apiUrls.urlRabbits}${rabbitId}/`);
  }, [sendRequest, rabbitId]);

  if (isLoading) {
    return <h2 className="text-muted text-center m-5 p-5">Cargando...</h2>;
  }

  const imagesCard = data?.photo.split(",");

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
        <div className="card-horizontal" id={styles.cardhorizontal}>
          <img className="image" src={imagesCard} id={styles.imagerabbit} />
          <div className="card-container" id={styles.cardcontainerrabbit}>
            <div className="card-title" id={styles.cardtittlerabbit}>
              <div className="sub" id={styles.subrabbit}>
                <div className="text-wrapper" id={styles.textwrapper}>
                  ID: {rabbitId}
                </div>
              </div>
              <div className="nombre-del-conejo" id={styles.namerabbit}>
                {data.tag}
              </div>
            </div>
            <div className="card-info" id={styles.cardinforabbit}>
              <div className="div" id={styles.divmacho}>
                {data.genre}
              </div>
              <div className="text-wrapper-2">{data.weight}K</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardRabbit;
