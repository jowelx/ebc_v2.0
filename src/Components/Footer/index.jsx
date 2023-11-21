import AppLink from "../../UI/AppLink";
import Heading from "../../UI/Heading";

/**
 * Renders the footer component.
 *
 * @return {ReactElement} The footer component.
 */
const Footer = () => {
  const data = [
    {
      title: "Empresa",
      links: [
        { name: "Acerca de nosotros", href: "#" },
        { name: "Centro de ayuda", href: "#" },
        { name: "Solicitud de funcionalidades", href: "#" },
      ],
    },
    {
      title: "Sitio web",
      links: [
        { name: "Términos y condiciones", href: "#" },
        { name: "Política de privacidad", href: "#" },
        { name: "Mapa del sitio", href: "#" },
      ],
    },
  ];
  return (
    <div className="container bg-light mt-1">
      <div className="col">
        <AppLink
          href="/"
          className="d-flex align-items-center link-dark text-decoration-none"
        >
          <img src={'/assets/logoText.svg'} alt="Logo" className=" mt-3" />
        </AppLink>
      </div>
      <footer className="py-3">
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-6">
              <Heading className="h5">{item.title}</Heading>
              <ul className="nav flex-column">
                {item.links.map((link, i) => (
                  <li key={i} className="nav-item mb-2">
                    <AppLink
                      href={link.href}
                      className="nav-link p-0 text-muted"
                    >
                      {link.name}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between pt-2 border-top text-muted">
          <p>&copy;2023 El buen conejo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
