import styles from "../cardCageProfile/cardCageProfile.module.css"

const CardCageProfile = () =>{
    return <> 
                <div>
<div className="card rounded-2  p-">
  <div className="card-body r">
    <span>
        Nombre de la jaula
    </span>
    <div className="">
    <span  className={styles.countRabitts}>
    20 conejos 
    </span >
    <span className={styles.countRabitts}>
    Lote:100
    </span>

    </div>
  </div>
</div>
        </div>
    </>
} 

export default CardCageProfile