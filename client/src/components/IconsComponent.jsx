import PropTypes from "prop-types";
// ICONS
import userIcon from "../assets/icons/user.svg";
import emptyHeart from "../assets/icons/empty-heart.svg";
import fullHeart from "../assets/icons/full-heart.svg";
import eyeHide from "../assets/icons/eye-password-hide.svg";
import eyeShow from "../assets/icons/eye-password-show.svg";
import leftArrow from "../assets/icons/chevron-left-arrow.svg";
import check from "../assets/icons/check.svg";
import lock from "../assets/icons/lock.svg";
// PICTURES
import menuBurger from "../assets/images/burger-bar50px.png";
import logo from "../assets/images/VirtuArtLogo.svg";

const Icons = {
  user: userIcon,
  emptyHeart,
  fullHeart,
  eyeHide,
  eyeShow,
  leftArrow,
  check,
  lock,
  "menu-burger": menuBurger,
  logo,
};

function IconsComponent({ src, alt, className }) {
  const IconComponent = Icons[src];
  if (!IconComponent) {
    return null;
  }
  return <img src={IconComponent} alt={alt || src} className={className} />;
}

IconsComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

IconsComponent.defaultProps = {
  alt: "",
  className: "",
};

export default IconsComponent;
