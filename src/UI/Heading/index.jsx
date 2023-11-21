import PropTypes from "prop-types";

/**
 * Renders a heading element with the specified class name.
 *
 * @param {ReactNode} children - The content to be displayed within the heading element.
 * @param {string} className - The class name to be applied to the heading element (default: "h2").
 * @return {ReactElement} The rendered heading element.
 */
const Heading = ({ children, className = "h2" }) => {
  return <h2 className={className}>{children}</h2>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Heading;
