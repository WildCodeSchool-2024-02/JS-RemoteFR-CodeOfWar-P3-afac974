import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import IconsComponent from "../../components/IconsComponent";
import BackButtonComponent from "../../components/BackButtonComponent";

function RegisterPage() {
  const nameRef = useRef();
  const emailRef = useRef();
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const getIconSrc = () => {
    if (confirmPassword === "") return null;
    return password === confirmPassword ? "check" : "cross";
  };

  const getAltText = () => {
    if (confirmPassword === "") return "";
    return password === confirmPassword
      ? "Mots de passe identiques"
      : "Mots de passe différents";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: nameRef.current.value,
            email: emailRef.current.value,
            password,
          }),
        });

        if (response.status === 201) {
          navigate("/login");
        } else {
          console.info(response);
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
            ref={nameRef}
            type="text"
            placeholder="Nom"
            required
          />
        </div>{" "}
        <div className="registerpage_inputIcon registerpage_inputId">
          <input
            className="registerpage_input registerpage_email"
            ref={emailRef}
            type="email"
            placeholder="Email"
            required
          />
        </div>{" "}
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
                showPassword
                  ? "Cacher le mot de passe"
                  : "Afficher le mot de passe"
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
        <div className="registerpage_inputIcon">
          <input
            className="registerpage_input registerpage_passwordConfirm"
            type="password"
            placeholder="Confirmer mot de passe"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />{" "}
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
              src={getIconSrc()}
              alt={getAltText()}
            />{" "}
          </div>
        </div>
        <button className="registerpage_submitButton" type="submit">
          S'inscrire
        </button>
        <BackButtonComponent to="/authentification" />
      </form>
    </div>
  );
}

export default RegisterPage;
