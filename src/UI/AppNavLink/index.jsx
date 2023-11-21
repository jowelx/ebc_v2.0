import PropTypes from "prop-types";
import Link from "next/link";

/**
 * Renders a navigation link for the app using React Router DOM.
 * The component AppNavLink uses NavLink from react-router-dom to create navigation links within the application.
 * NavLink provides a declarative way to navigate between different routes in a React application.
 * It ensures that the application state is preserved when navigating between pages and updates the URL accordingly.
 * By using NavLink, you can create clickable links that trigger a route change without causing a full page reload.
 * Additionally, NavLink automatically applies an "active" class to the link when the current URL matches its route,
 * making it easy to style the active link differently.
 *
 * @param {string} className - The class name for the link.
 * @param {ReactNode} children - The content to be displayed inside the link.
 * @param {string} href - The destination URL for the link.
 * @return {ReactNode} The rendered navigation link.
 */
const AppNavLink = ({ className, children, href = "#" }) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

AppNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AppNavLink;
