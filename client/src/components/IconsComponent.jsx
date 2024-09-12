import PropTypes from "prop-types";
// ICONS
import userIcon from "../assets/icons/user.svg";
import emptyHeart from "../assets/icons/empty-heart.svg";
import fullHeart from "../assets/icons/full-heart.svg";
import eyeHide from "../assets/icons/eye-password-hide.svg";
import eyeShow from "../assets/icons/eye-password-show.svg";
import leftArrow from "../assets/icons/chevron-left-arrow.svg";
import check from "../assets/icons/check.svg";
import cross from "../assets/icons/cross.svg";
import lock from "../assets/icons/lock.svg";
// PICTURES
import menuBurger from "../assets/images/burger-bar50px.png";
import uploadIcon from "../assets/images/add_image30px.png";
import logo from "../assets/images/VirtuArtLogo.svg";

const Icons = {
  userIcon: { src: userIcon, alt: "User icon" },
  emptyHeart: { src: emptyHeart, alt: "Empty heart icon" },
  fullHeart: { src: fullHeart, alt: "Full heart icon" },
  eyeHide: { src: eyeHide, alt: "Hide password icon" },
  eyeShow: { src: eyeShow, alt: "Show password icon" },
  leftArrow: { src: leftArrow, alt: "Left arrow icon" },
  check: { src: check, alt: "Checkmark icon" },
  cross: { src: cross, alt: "Cross icon" },
  lock: { src: lock, alt: "Lock icon" },
  "menu-burger": { src: menuBurger, alt: "Menu burger icon" },
  uploadIcon: { src: uploadIcon, alt: "upload icon" },
  logo: { src: logo, alt: "VirtuArt logo" },
};

function IconsComponent({ src, alt = "", className = "" }) {
  const IconComponent = Icons[src];
  if (!IconComponent) {
    return null;
  }
  return (
    <img
      src={IconComponent.src}
      alt={alt || IconComponent.alt}
      className={className}
    />
  );
}

IconsComponent.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}.isRequired;

export default IconsComponent;
