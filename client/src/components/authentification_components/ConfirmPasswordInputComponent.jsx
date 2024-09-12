import PropTypes from "prop-types";
import IconsComponent from "../IconsComponent";
import SentencePasswordCheckComponent from "./SentencePasswordCheckComponent";

function ConfirmPasswordInputComponent({
  confirmPassword,
  password,
  showConfirmPassword,
  handleConfirmPasswordChange,
  setShowConfirmPassword,
}) {
  return (
    <div className="registerpage_inputIcon">
      <input
        className="registerpage_input registerpage_passwordConfirm"
        type={showConfirmPassword ? "text" : "password"}
        placeholder="Confirmer mot de passe"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        required
      />
      <span
        className="registerpage_showPassword"
        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) =>
          event.key === " " && setShowConfirmPassword(!showConfirmPassword)
        }
      >
        <IconsComponent
          className="registerpage_showPasswordConfirmIcon"
          src={showConfirmPassword ? "eyeHide" : "eyeShow"}
          alt={
            showConfirmPassword
              ? "Cacher le mot de passe"
              : "Afficher le mot de passe"
          }
        />
      </span>
      <div className="registerpage_passwordConfirmCondition ">
        <SentencePasswordCheckComponent
          className="registerpage_passwordConditionIcons"
          password={password}
          confirmPassword={confirmPassword}
        />
      </div>
    </div>
  );
}

ConfirmPasswordInputComponent.propTypes = {
  confirmPassword: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  showConfirmPassword: PropTypes.bool.isRequired,
  handleConfirmPasswordChange: PropTypes.func.isRequired,
  setShowConfirmPassword: PropTypes.func.isRequired,
};

export default ConfirmPasswordInputComponent;
