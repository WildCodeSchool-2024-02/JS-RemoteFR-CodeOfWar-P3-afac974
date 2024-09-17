import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postloginUser } from "../../services/request";
import { useAuth } from "../../context/AuthContext";

import IconsComponent from "../../components/IconsComponent";
import BackButtonComponent from "../../components/authentification_components/BackButtonComponent";

function LoginPage() {
  const emailRef = useRef();
  const hashedPasswordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await postloginUser({
        email: emailRef.current.value,
        password: hashedPasswordRef.current.value,
      });

      if (res.status === 200) {
        setAuth(res.data);
        navigate("/authentification");
      } else {
        console.info(res);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App_sizePage">
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
              ref={hashedPasswordRef}
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
              <IconsComponent
                src={showPassword ? "eyeHide" : "eyeShow"}
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
        <BackButtonComponent to="/authentification" />
      </form>
    </div>
  );
}

export default LoginPage;
