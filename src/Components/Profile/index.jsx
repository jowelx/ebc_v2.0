import { Link } from "react-router-dom";
import LittersProfileButton from "../../UI/LittersProfileButton";
import ProfileStyles from "./ProfileStyles.module.css";
import photoProfile from "../../assets/perfil.svg";
import { useEffect, useState } from "react";
import { apiUrls } from "../../utils/links";
import Cookies from "js-cookie";

const Profile = ({ marketProfileId }) => {
  const [nameMarketProfile, setNameMarketProfile] =
    useState("Usuario Registrado");
  const userId = Cookies.get("userId");

  // useEffect(() => {
  //   fetch(`${apiUrls.urlProfiles}?user_id=${userId}`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       Authorization: `Bearer ${Cookies.get("authToken")}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((profile) => {
  //       setNameMarketProfile(
  //         `${profile.results[0].first_name} ${profile.results[0].last_name}`
  //       );
  //     });
  // }, [marketProfileId]);

  useEffect(() => {
    if (marketProfileId) {
      fetch(`${apiUrls.urlProfiles}${marketProfileId}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${Cookies.get("authToken")}`,
        },
      })
        .then((response) => response.json())
        .then((profile) => {
          setNameMarketProfile(`${profile.first_name} ${profile.last_name}`);
        });
    }
  }, [marketProfileId]);

  return (
    <div
      className={`${ProfileStyles.containerSize}  d-flex align-items-center sm-m-auto `}
    >
      <img src={photoProfile} alt="Foto de perfil" className="img-fluid" />
      <div className="ms-3">
        <h3 className="mb-3">
          {nameMarketProfile.includes("undefined")
            ? "Usuario Registrado"
            : nameMarketProfile}
        </h3>
        {!marketProfileId && (
          <Link to="/editProfile">
            <LittersProfileButton>Editar perfil</LittersProfileButton>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Profile;
