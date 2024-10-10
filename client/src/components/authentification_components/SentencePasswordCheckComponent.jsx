import PropTypes from "prop-types";
import IconsComponent from "../IconsComponent";

function SentencePasswordCheckComponent({ hashedPassword, confirmPassword }) {
  const getSrcConfirmPassword = () => {
    if (confirmPassword === "") return "";
    return hashedPassword === confirmPassword ? "check" : "cross";
  };

  const getAltConfirmPassword = () => {
    if (confirmPassword === "") return "";
    return hashedPassword === confirmPassword
      ? "Mots de passe identiques"
      : "Mots de passe différents";
  };

  const getTextConfirmPassword = () => {
    if (confirmPassword === "") return "";
    return hashedPassword === confirmPassword
      ? "Le mot de passe est identique."
      : "Le mot de passe n'est pas identique.";
  };

  return (
    <div className="registerpage_passwordConfirmCondition ">
      {" "}
      <IconsComponent
        className="registerpage_passwordConditionIcons"
        src={getSrcConfirmPassword()}
        alt={getAltConfirmPassword()}
      />
      {getTextConfirmPassword()}
    </div>
  );
}

SentencePasswordCheckComponent.propTypes = {
  hashedPassword: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
};

export default SentencePasswordCheckComponent;
