import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import IconsComponent from "../../components/IconsComponent";
import BackButtonComponent from "../../components/authentification_components/BackButtonComponent";
// import ToggleSwitchComponent from "../../components/authentification_components/ToggleSwitchComponent";
import SentencePasswordCheckComponent from "../../components/authentification_components/SentencePasswordCheckComponent";

function RegisterPage() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) =>
    setConfirmPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/users`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: nameRef.current.value,
              email: emailRef.current.value,
              password,
            }),
          }
        );

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
        <div className="registerPage_toggleSwitch">
          {/* <div className="registerPage_toggleSwitch_respectAll">
            <ToggleSwitchComponent idRef="1" />
            <p>
              Veuillez respecter les conditions du site, les règles de bonne
              conduite, et vous engager à respecter les droits d'auteur des
              œuvres présentes sur le site.
            </p>
          </div>
          <div className="registerPage_toggleSwitch_isArtist">
            <ToggleSwitchComponent idRef="2" />
            <p>Êtes vous un artiste? </p>
          </div>
          <div className="registerPage_toggleSwitch_legalAge">
            <ToggleSwitchComponent idRef="3" />
            <p>Veuillez confirmer que vous avez l'âge légal dans votre pays.</p>
          </div>
          <div className="registerPage_toggleSwitch_respectCondition">
            <ToggleSwitchComponent idRef="4" />
            <p>
              Veuillez confirmer que vous acceptez les conditions de publication
              et que vous respectez la politique du site.
            </p>
          </div> */}
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
