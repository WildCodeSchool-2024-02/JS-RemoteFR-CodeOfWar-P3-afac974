import PropTypes from "prop-types";
import { forwardRef } from "react";
import IconsComponent from "../IconsComponent";

const PasswordInputComponent = forwardRef(
  ({ password, showPassword, handlePasswordChange, setShowPassword }, ref) => (
    <div className="registerpage_inputIcon">
      <input
        className="registerpage_input registerpage_password"
        type={showPassword ? "text" : "password"}
        placeholder="Mot de passe"
        value={password}
        onChange={handlePasswordChange}
        required
        ref={ref}
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
          className="registerpage_showPasswordIcon"
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
          alt={`Longueur du mot de passe: ${password.length} >= 8`}
        />
        {`Longueur du mot de passe: ${password.length} >= 8`}
      </div>
    </div>
  )
);

PasswordInputComponent.propTypes = {
  password: PropTypes.string.isRequired,
  showPassword: PropTypes.bool.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  setShowPassword: PropTypes.func.isRequired,
};

PasswordInputComponent.displayName = "PasswordInputComponent";
export default PasswordInputComponent;
