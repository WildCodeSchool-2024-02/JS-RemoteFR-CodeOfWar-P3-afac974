import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import IconsComponent from "../IconsComponent";

function BackButtonComponent({
  to,
  classNameLink = "backButton_Link",
  classNameIcon = "backButton_Icon",
  classNameText = "backButton_Text",
  src = "leftArrow",
  alt = "Flèche gauche",
}) {
  return (
    <Link to={to} className={classNameLink}>
      <IconsComponent className={classNameIcon} src={src} alt={alt} />
      <span className={classNameText}>Précédent</span>
    </Link>
  );
}

BackButtonComponent.propTypes = {
  to: PropTypes.string.isRequired,
  classNameLink: PropTypes.string,
  classNameIcon: PropTypes.string,
  classNameText: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
}.isRequired;

export default BackButtonComponent;
