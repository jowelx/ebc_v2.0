import PropTypes from "prop-types";
import Link from "next/link";

/**
 * Renders a link component for the application using React Router DOM.
 * The component AppLink uses Link from react-router-dom to create navigation links within the application.
 * The Link component provides a declarative way to navigate between different routes in a React application.
 * It ensures that the application state is preserved when navigating between pages and updates the URL accordingly.
 * By using Link, you can create clickable links that trigger a route change without causing a full page reload.
 *
 * @param {string} className - The CSS class name for the component.
 * @param {ReactNode} children - The child elements to be rendered inside the link.
 * @param {string} href - The URL to navigate to when the link is clicked.
 * @return {ReactElement} The rendered link component.
 */
const AppLink = ({ className = "", children, href = "#" }) => {
  return (
    <Link href={href} className={`text-decoration-none ${className}`}>
      {children}
    </Link>
  );
};

AppLink.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AppLink;
