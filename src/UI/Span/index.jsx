import PropTypes from "prop-types";

/**
 * Create a span element with the specified class name and children.
 *
 * @param {ReactNode} children - The content of the span element.
 * @param {string} className - The class name to be applied to the span element.
 * @return {ReactElement} The span element.
 */
const Span = ({ children, className }) => {
  return <span className={className} role="sampleSpan">{children}</span>;
};

Span.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Span;
