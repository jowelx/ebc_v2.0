import { useState } from "react";
import CardCageProfile from "../cardCageProfile";
import styles from "../MenuProfile/menuProfileJaulas.module.css";

const MenuRabbitCamada = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card">
                <CardCageProfile />
              </div>
            </div>
            <div className="col">
              <div className="card">
                <CardCageProfile />
              </div>
            </div>
            <div className="col">
              <div className="card">
                <CardCageProfile />
              </div>
            </div>
            <div className="col">
              <div className="card">
                <CardCageProfile />
              </div>
            </div>
            <div className="col">
              <div className="card">
                <CardCageProfile />
              </div>
            </div>
            <div className="col">
              <div className="card">
                <CardCageProfile />
              </div>
            </div>
            <div className="col">
              <div className="card">
                <CardCageProfile />
              </div>
            </div>
            <div className="col">
              <div className="card">
                <CardCageProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuRabbitCamada;
