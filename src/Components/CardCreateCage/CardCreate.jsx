import React from "react";
import styles from "../CardCreateCage/CardCreate.module.css";
import { useNavigate } from "react-router-dom";

const CardCreate = () => {

    const navigate = useNavigate();

    return<>
        <div>
            
            <div>
                <h1 className={styles.instructionsTitle}>1. Registra tus jaulas</h1>
                <p className={styles.instructionsText}>Agrega información básica de la jaula como un nombre y un número de lote que sirva para identificarla</p>
                <hr className={styles.instructionsLine}></hr>
            </div>

            <div>
                <h1 className={styles.instructionsTitle}>2. Añade los conejos</h1>
                <p className={styles.instructionsText}>Agrega tus conejos a su correspondiente jaula y dales una descripción detallada, como su raza, edad y su reproducción</p>
                <hr className={styles.instructionsLine}></hr>
            </div>

            <div>
                <h1 className={styles.instructionsTitle}>3. Lleva el control de tu granja</h1>
                <p className={styles.instructionsText2}>Realiza un seguimiento de tu granja a través de los reportes para conseguir el mejor rendimiento posible</p>
            </div>

            <div>
                <button onClick={() => navigate('/cage/step1')} className={styles.buttonComenzar}> Comenzar </button>
            </div>

        </div>
    </>
};

export default CardCreate;