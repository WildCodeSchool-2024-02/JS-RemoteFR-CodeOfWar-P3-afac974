import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import eyeHide from "../../assets/icons/eye-password-hide.svg";
import eyeShow from "../../assets/icons/eye-password-show.svg";
import leftArrow from "../../assets/icons/chevron-left-arrow.svg";

function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });

      if (response.status === 200) {
        const auth = await response.json();
        setAuth(auth);
        navigate("/authentification");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="loginpage_title">Connexion</h2>
      <form className="loginpage_form" onSubmit={handleSubmit}>
        <div className="loginpage_inputsIcon">
          <input
            className="loginpage_input"
            ref={emailRef}
            type="email"
            placeholder="Email"
            required
          />
          <div className="loginpage_passwordContainer">
            <input
              className="loginpage_input"
              ref={passwordRef}
              type={showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              required
            />
            <span
              className="loginpage_showPassword"
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
          </div>
        </div>
        <button className="loginpage_submitButton" type="submit">
          Se connecter
        </button>
        <Link to="/authentification" className="loginpage_backButton">
          {" "}
          <img
            className="loginpage_backButtonIcon"
            src={leftArrow}
            alt="Flèche gauche"
          />
          <span className="loginpage_backButtonText">Précédent</span>
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
