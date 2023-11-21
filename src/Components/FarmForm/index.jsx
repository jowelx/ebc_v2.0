import { useEffect, useState } from "react";
// import useCloudinaryUpload from "../../hooks/useCloudinaryUpload";
import FarmFormStyles from "./FarmFormStyles.module.css";
import { useHttp } from "../../hooks/useHttp";
import { apiUrls } from "../../utils/links";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

const FarmForm = () => {
  const [formSubmited, setFormSubmited] = useState(false);
  const [farmData, setFarmData] = useState({
    profile_id: "",
    name: "",
    address: "",
    description: "",
  });
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: Cookies.get("authToken")
      ? `Bearer ${Cookies.get("authToken")}`
      : null,
  };
  const userId = Cookies.get("userId");
  const { sendRequest, isntOk } = useHttp();

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFarmData({
      ...farmData,
      [id]: value,
    });
  };

  useEffect(() => {
    if (userId) {
      searchProfileId();
    }
  }, [userId]);

  const searchProfileId = async () => {
    if (userId) {
      const res = await fetch(`${apiUrls.urlProfiles}?user_id=${userId}`, {
        headers,
      });
      const data = await res.json();
      const profileId = data.results[0].id;
      setFarmData((prevState) => ({
        ...prevState,
        profile_id: profileId,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest(`${apiUrls.urlFarms}`, "POST", farmData);
    setFormSubmited(true);
    //reload the page to show the new farm
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    //on submit, save the data of the new litter
    <form
      className={`${FarmFormStyles.formFarm} border rounded px-3 py-4 shadow bg-body-tertiary`}
      onSubmit={handleSubmit}
    >
      <h4>Agregar nueva granja</h4>
      <h6 className="fw-normal">Añade los datos de la granja</h6>

      <div className="mt-2">
        <div className="d-flex form-row">
          <div className="form-group col">
            <label className="form-label" htmlFor="name">
              Nombre
            </label>
            {/* choose name */}
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group ms-2 col">
            <label className="form-label" htmlFor="address">
              Direccion
            </label>
            {/* choose address  */}
            <input
              type="text"
              className="form-control"
              name="address"
              id="address"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="mt-2">
        {/* Add a description for the farm */}
        <div className="d-flex flex-column">
          <label htmlFor="description" className="form-label" id="address">
            Descripción
          </label>
          <textarea
            className="form-control"
            name="description"
            id="description"
            rows="3"
            onChange={handleInputChange}
          ></textarea>
        </div>
      </div>

      <div className="mt-3">
        {/* add and save button */}
        <button className="btn btn-primary me-3" type="submit">
          Agregar y guardar
        </button>
      </div>

      {/* if the form is submited show a message */}
      {formSubmited && (
        <p className="text-success"> Granja creada correctamente</p>
      )}
      {/* if the form has a error show a message */}
      {isntOk && <p className="text-danger"> {isntOk.error} </p>}
    </form>
  );
};

export default FarmForm;

FarmForm.propTypes = {
  addFarm: PropTypes.func,
};
