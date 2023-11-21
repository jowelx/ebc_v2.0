import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import AppLink from "../../UI/AppLink";
import { apiUrls } from "../../utils/links";

const FarmCard = ({ id, photo, name, description, address }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <div
        className={`card d-inline-flex flex-column rounded m-3 shadow bg-body-tertiary rounded align-self-center ${styles.cardSize} `}
      >
        <AppLink
          href={`/updateimage/${id}?apiurl=${apiUrls.urlFarms}&beforeurl=${location.pathname}`}
        >
          <img
            src={photo}
            alt="farm img"
            title="Actualizar imagen"
            className={`card-img-top img-fluid ${styles.imageSize}`}
          />
        </AppLink>

        <div className="card-body">
          <h5 className="card-title text-wrap">{name}</h5>
          <p className={`card-text ${styles.textLimitDesc} text-wrap`}>
            {description}
          </p>
          <p className={`card-text ${styles.textLimit} text-wrap`}>{address}</p>
          <button
            onClick={() => navigate(`/farms/${id}`)}
            className="btn btn-primary"
          >
            Ver Granja
          </button>
        </div>
      </div>
    </div>
  );
};

FarmCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  address: PropTypes.string,
  id: PropTypes.string,
  photo: PropTypes.string,
};

export default FarmCard;
