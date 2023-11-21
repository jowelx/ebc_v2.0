import PropTypes from "prop-types";

/**
 * Renders a button component with the given properties.
 *
 * @param {Object} props - The properties of the button component.
 * @param {ReactNode} props.children - The content of the button.
 * @param {Function} props.onClick - The click event handler for the button.
 * @param {string} props.type - The type of button.
 * @param {string} props.className - The CSS class name for the button.
 * @return {ReactElement} The rendered button component.
 */
const Button = ({
  children,
  onClick = () => {},
  type = "button",
  className = "btn-danger",
}) => {
  return (
    <button type={type} onClick={onClick} className={`btn ${className}`} role="sampleButton">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

