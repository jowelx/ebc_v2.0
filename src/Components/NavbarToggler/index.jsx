import PropTypes from "prop-types";
import Span from "../../UI/Span";

/**
 * Generates a Navbar Toggler button component for screen small as mobile.
 *
 * @param {string} target - The target element to collapse or expand.
 * @param {string} ariaControls - The ID of the element that controls the expanded/collapsed state.
 * @param {boolean} ariaExpanded - Determines if the element is expanded or collapsed.
 * @param {string} ariaLabel - The label for the button that toggles the navigation.
 * @return {JSX.Element} The Navbar Toggler component.
 */
const NavbarToggler = ({
  target = "#navbarSupportedContent",
  ariaControls = "navbarSupportedContent",
  ariaExpanded = false,
  ariaLabel = "Toggle navigation",
}) => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={target}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
    >
      <Span className="navbar-toggler-icon"></Span>
    </button>
  );
};

NavbarToggler.propTypes = {
  target: PropTypes.string,
  ariaControls: PropTypes.string,
  ariaExpanded: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export default NavbarToggler;
