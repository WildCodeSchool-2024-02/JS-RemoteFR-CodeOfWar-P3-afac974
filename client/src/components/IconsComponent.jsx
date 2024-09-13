import PropTypes from "prop-types";
// ICONS
import check from "../assets/icons/check.svg";
import cross from "../assets/icons/cross.svg";
import emptyHeart from "../assets/icons/empty-heart.svg";
import error from "../assets/icons/error.svg";
import eyeHide from "../assets/icons/eye-password-hide.svg";
import eyeShow from "../assets/icons/eye-password-show.svg";
import fullHeart from "../assets/icons/full-heart.svg";
import key from "../assets/icons/key.svg";
import leftArrow from "../assets/icons/left-arrow.svg";
import lock from "../assets/icons/lock.svg";
import mail from "../assets/icons/mail.svg";
import rightarrow from "../assets/icons/right-arrow.svg";
import tag from "../assets/icons/tag.svg";
import userIcon from "../assets/icons/user.svg";

// PICTURES
import artlogo from "../assets/images/artlogo.png";
import menuburger from "../assets/images/burger.png";
import importicon from "../assets/images/import.png";
import logo from "../assets/images/VirtuArtLogo.svg";

const Icons = {
  check: { src: check, alt: "Checkmark icon" },
  cross: { src: cross, alt: "Cross icon" },
  emptyHeart: { src: emptyHeart, alt: "Empty heart icon" },
  error: { src: error, alt: "error" },
  eyeHide: { src: eyeHide, alt: "Hide password icon" },
  eyeShow: { src: eyeShow, alt: "Show password icon" },
  fullHeart: { src: fullHeart, alt: "Full heart icon" },
  key: { src: key, alt: "Password" },
  leftArrow: { src: leftArrow, alt: "Left arrow icon" },
  lock: { src: lock, alt: "Lock icon" },
  mail: { src: mail, alt: "Email" },
  rightarrow: { src: rightarrow, alt: "rightarrow" },
  tag: { src: tag, alt: "tag" },
  userIcon: { src: userIcon, alt: "User icon" },

  artlogo: { src: artlogo, alt: "Logo PNG" },
  menuburger: { src: menuburger, alt: "Menu burger icon" },
  importicon: { src: importicon, alt: "import icon" },
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
