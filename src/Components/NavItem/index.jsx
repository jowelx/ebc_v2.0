import PropTypes from "prop-types";
import AppNavLink from "../../UI/AppNavLink";

/**
 * Generate a navigation item with a link.
 *
 * @param {string} href - The URL of the link.
 * @param {string} className - Additional CSS class for the navigation item.
 * @param {ReactNode} children - The content of the navigation item.
 * @return {ReactNode} - The generated navigation item.
 */
const NavItem = ({ href, className="", children }) => {
  return (
    <li className="nav-item">
      <AppNavLink className={`nav-link ${className}`} href={href}>
        {children}
      </AppNavLink>
    </li>
  );
};

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default NavItem;
