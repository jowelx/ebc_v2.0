// This component use some UI elements to construct a form to login to our application, you can login using
// a valid email with their respective password, this information will send to backend and validate, if allright
// you will be in the main view of the website

import React, { useState, useEffect } from "react";
import AppLink from "../../UI/AppLink";
import FormSection from "../../UI/FormSection";
import PasswordSection from "../../UI/PasswordSection";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import Cookies from "js-cookie";
import { apiUrls } from "../../utils/links";
import Loader from "../../UI/Loader";

const index = () => {
  const navigate = useNavigate();
  const [formSubmited, setFormSubmited] = useState(false);
  const { isLoading, error, data, sendRequest, isntOk } = useHttp();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (formSubmited) {
      sendRequest(`${apiUrls.urlLogin}`, "POST", formData);
    }
  }, [formSubmited]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmited(false);

    setTimeout(() => {
      setFormSubmited(true);
    }, 100);
  };

  if (data) {
    Cookies.set("authToken", data.token);
    Cookies.set("userId", data.id);
    localStorage.setItem("logedAccount", JSON.stringify(data.user));
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormSection
        label="Nombre de usuario"
        type="text"
        id="username"
        placeholder="username"
        onChange={handleInputChange}
        value={formData.username}
      />
      <PasswordSection
        id="password"
        label="Password"
        placeholder="**********"
        onChange={handleInputChange}
        value={formData.password}
      />
      {!data && isntOk && <p className="text-danger"> {isntOk.error} </p>}
      {data && <p className="text-success"> {data.message} </p>}
      <Button type="submit" className="btn-success w-100 my-3">
        {isLoading ? <Loader active={isLoading} /> : "Ingresar"}
      </Button>
      <AppLink href="/forgot" className="form-check-label" htmlFor="forgotPass">
        ¿Olvidaste la contraseña?
      </AppLink>
    </form>
  );
};

export default index;
