import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegisterUser } from "../../services/request";

import IconsComponent from "../../components/IconsComponent";
import BackButtonComponent from "../../components/authentification_components/BackButtonComponent";
import SentencePasswordCheckComponent from "../../components/authentification_components/SentencePasswordCheckComponent";

function RegisterPage() {
  const pseudoRef = useRef();
  const emailRef = useRef();
  const hashedPasswordRef = useRef();
  const [hashedPassword, sethashedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (event) => sethashedPassword(event.target.value);
  const handleConfirmPasswordChange = (event) =>
    setConfirmPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (hashedPassword === confirmPassword) {
      try {
        const res = await postRegisterUser({
          pseudo: pseudoRef.current.value,
          email: emailRef.current.value,
          password: hashedPassword,
        });
        if (res && res.status === 201) {
          navigate("/login");
        } else {
          console.info(res);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="App_sizePage">
      <h2 className="registerpage_title">Inscription</h2>
      <form className="registerpage_form" onSubmit={handleSubmit}>
        <div className="registerpage_inputIcon registerpage_inputId">
          <input
            className="registerpage_input registerpage_name"
            ref={pseudoRef}
            type="text"
            placeholder="Nom"
            required
          />
        </div>
        <div className="registerpage_inputIcon registerpage_inputId">
          <input
            className="registerpage_input registerpage_email"
            ref={emailRef}
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="registerpage_inputIcon">
          <input
            className="registerpage_input registerpage_password"
            ref={hashedPasswordRef}
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            value={hashedPassword}
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
                showPassword
                  ? "Cacher le mot de passe"
                  : "Afficher le mot de passe"
              }
            />
          </span>
          <div className="registerpage_passwordCondition">
            <IconsComponent
              className="registerpage_passwordConditionIcons"
              src={hashedPassword.length >= 8 ? "check" : "cross"}
            />{" "}
            {`Longueur du mot de passe: ${hashedPassword.length} >= 8`}
          </div>
        </div>

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
              hashedPassword={hashedPassword}
              confirmPassword={confirmPassword}
            />
          </div>
        </div>
        <button className="registerpage_submitButton" type="submit">
          S'inscrire
        </button>
        <BackButtonComponent to="/authentification" />
        <BackButtonComponent to="/login" />
      </form>
    </div>
  );
}

export default RegisterPage;
