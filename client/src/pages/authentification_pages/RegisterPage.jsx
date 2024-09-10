import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../assets/styles/authentification_styles/registerpage.css";

import eyeHide from "../../assets/icons/eye-password-hide.svg";
import eyeShow from "../../assets/icons/eye-password-show.svg";
import leftArrow from "../../assets/icons/chevron-left-arrow.svg";

function RegisterPage() {
  const nameRef = useRef();
  const emailRef = useRef();
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

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
            password: passwordRef.current.value,
          }),
        });

        if (response.status === 201) {
          navigate("/login");
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
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
            onChange={(e) => setPassword(e.target.value)}
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
            <img
              src={showPassword ? eyeHide : eyeShow}
              alt={
                showPassword
                  ? "Cacher le mot de passe"
                  : "Afficher le mot de passe"
              }
            />
          </span>
          <div className="registerpage_passwordCondition">
            {password.length >= 8 ? "✅" : "❌"}{" "}
            {`length: ${password.length} >= 8`}
          </div>
        </div>
        <div className="registerpage_inputIcon">
          <input
            className="registerpage_input registerpage_passwordConfirm"
            type="password"
            placeholder="Confirmer mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            <img
              src={showPassword ? eyeHide : eyeShow}
              alt={
                showPassword
                  ? "Cacher le mot de passe"
                  : "Afficher le mot de passe"
              }
            />
          </span>
          <div className="registerpage_passwordCondition">
            {password === confirmPassword ? "✅" : "❌"}{" "}
          </div>
        </div>
        <button className="registerpage_submitButton" type="submit">
          S'inscrire
        </button>
        <Link to="/authentification" className="loginpage_backButton">
          {" "}
          <img
            className="registerpage_backButtonIcon"
            src={leftArrow}
            alt="Flèche gauche"
          />
          <span className="registerpage_backButtonText">Précédent</span>
        </Link>
      </form>
    </div>
  );
}

export default RegisterPage;
