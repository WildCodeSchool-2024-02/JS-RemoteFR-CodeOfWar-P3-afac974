import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postloginUser } from "../../services/request";
import { useAuth } from "../../context/AuthContext";

import IconsComponent from "../../components/IconsComponent";
import BackButtonComponent from "../../components/authentification_components/BackButtonComponent";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await postloginUser({
        email,
        password,
      });

      if (res.status === 200) {
        setAuth(res.data);
        navigate("/authentification");
        // A changer avec l'id
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <div className="loginpage_passwordContainer">
            <input
              className="loginpage_input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
