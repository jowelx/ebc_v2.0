import React, { useState, useEffect} from "react";
import { useHttp } from "../../hooks/useHttp";
import { useLoaderData, useLocation } from "react-router-dom";
import MenuRabbitPerfil from "./MenuRabbitPerfil";
import styles from "../MenuRabbit/menuRabbit.module.css";
import MenuRabbitNotes from "../MenuRabbit/MenuRabbitNotes"
import { apiUrls } from "../../utils/links"

function PaginatedView({ currentPage, onPageChange }) {
  const pages = [
    { id: "perfil", label: "Perfil" },
    { id: "notes", label: "Notas" },
  ];

  return (
    <div>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page.id}
            className={`page-item ${page.id === currentPage ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(page.id);
            }}
          >
            <a className="page-link" href="#" id={styles.linkPaginationRabbit}>
              {page.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const MenuRabbit = () => {
  const [currentPage, setCurrentPage] = useState("perfil");
  const [perfilActive, setPerfilActive] = useState(true);
  const [notasActive, setNotasActive] = useState(false);

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

  if (currentPage === "perfil") {
    return (
      <div>
        <PaginatedView
          currentPage={currentPage}
          onPageChange={(pageId) => {
            setCurrentPage(pageId);
            if (pageId === "perfil") {
              setPerfilActive(true);
              setNotasActive(false);
            } else if (pageId === "notes") {
              setPerfilActive(false);
              setNotasActive(true);
            }
          }}
        />
        <MenuRabbitPerfil rabbitData={ dataInfoRabbit() } />
        {notasActive && <MenuRabbitNotes />}
      </div>
    );
  } else if (currentPage === "notes") {
    return (
      <div>
        <PaginatedView
          currentPage={currentPage}
          onPageChange={(pageId) => {
            setCurrentPage(pageId);
            if (pageId === "perfil") {
              setPerfilActive(true);
              setNotasActive(false);
            } else if (pageId === "notes") {
              setPerfilActive(false);
              setNotasActive(true);
            }
          }}
        />
        <MenuRabbitNotes />
      </div>
    );
  }
};

export default MenuRabbit;
