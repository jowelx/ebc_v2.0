import PropTypes from "prop-types";

/**
 * Renders a paragraph element with the provided children and optional class name.
 *
 * @param {ReactNode} children - The content to be rendered inside the paragraph element.
 * @param {string} className - The optional class name to be applied to the paragraph element.
 * @return {ReactNode} The rendered paragraph element.
 */
const Paragraph = ({ children, className = "" }) => {
  return <p className={className}>{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Paragraph;
