import PropTypes from "prop-types";
import IconsComponent from "./IconsComponent";

function PasswordInputComponent({
  passwordRef,
  password,
  showPassword,
  handlePasswordChange,
  setShowPassword,
}) {
  return (
    <div className="registerpage_inputIcon">
      <input
        className="registerpage_input registerpage_password"
        ref={passwordRef}
        type={showPassword ? "text" : "password"}
        placeholder="Mot de passe"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <span
        className="registerpage_showPassword"
        onClick={() => setShowPassword(!showPassword)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) =>
          event.key === " " && setShowPassword(!showPassword)
        }
      >
        <IconsComponent
          src={showPassword ? "eyeHide" : "eyeShow"}
          alt={
            showPassword ? "Cacher le mot de passe" : "Afficher le mot de passe"
          }
        />
      </span>
      <div className="registerpage_passwordCondition">
        <IconsComponent
          className="registerpage_passwordConditionIcons"
          src={password.length >= 8 ? "check" : "cross"}
        />{" "}
        {`Longueur du mot de passe: ${password.length} >= 8`}
      </div>
    </div>
  );
}

PasswordInputComponent.propTypes = {
  passwordRef: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  showPassword: PropTypes.bool.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  setShowPassword: PropTypes.func.isRequired,
};

export default PasswordInputComponent;
