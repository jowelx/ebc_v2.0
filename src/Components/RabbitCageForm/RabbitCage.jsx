import { useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import { apiUrls } from "../../utils/links";
import { useLoaderData, useSearchParams } from "react-router-dom";
import FormSection from "../../UI/FormSection";
import Button from "../../UI/Button";
import FormSelect from "../../UI/FormSelect";
import { BREED_CHOICE, GENRE } from "../../utils/breeds";

const RabbitCage = () => {
  const id = useLoaderData();
  const { data, error, isLoading, sendRequest } = useHttp();
  const [searchParams] = useSearchParams();
  const pathCageFarm = decodeURIComponent(searchParams.get("pathcagefarm"));

  const [formData, setFormData] = useState({
    breed: "",
    genre: "",
    birthday: "",
    tag: "",
    price: "",
    weight: "",
    cage_id: id,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "birthday") {
      const inputDate = new Date(value);
      const currentDate = new Date();

      if (inputDate > currentDate) {
        alert("La fecha no puede ser mayor a la fecha actual");
        return;
      }
    }
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(formData).every((value) => value !== "");
    if (!isValid) {
      alert("Debe llenar todos los campos del formulario");
      return;
    }
    sendRequest(apiUrls.urlRabbits, "POST", formData);
    if (!isLoading && data) {
      window.location.href = pathCageFarm;
    }
  };

  return (
    <>
      <h1 className="my-4"> Añade un conejo nuevo a la Jaula </h1>
      <form onSubmit={handleSubmit}>
        <div className="d-flex gap-2">
          <FormSelect
            id="genre"
            label="Género"
            value={formData.genre}
            list={GENRE}
            onChange={handleInputChange}
          />
          <FormSelect
            id="breed"
            label="Raza"
            value={formData.breed}
            list={BREED_CHOICE}
            onChange={handleInputChange}
          />
        </div>
        <FormSection
          id="birthday"
          label="Fecha de nacimiento"
          onChange={handleInputChange}
          type="date"
          value={formData.birthday}
        />
        <FormSection
          id="tag"
          type="text"
          label="Nombre"
          placeholder="Conejo 1"
          onChange={handleInputChange}
          value={formData.tag}
        />
        <div className="d-flex gap-2">
          <FormSection
            id="weight"
            type="text"
            label="Peso (Kg)"
            placeholder=""
            onChange={handleInputChange}
            value={formData.weight}
          />
          <FormSection
            id="price"
            label="Precio (MXP)"
            type="text"
            placeholder="$"
            onChange={handleInputChange}
            value={formData.price}
          />
        </div>
        <Button type="submit" className="btn-success w-100 my-3">
          Continuar
        </Button>
      </form>
    </>
  );
};

export default RabbitCage;
