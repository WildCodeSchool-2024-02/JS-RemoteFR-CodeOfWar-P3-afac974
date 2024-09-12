import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import PasswordInputComponent from "../../components/authentification_components/PasswordInputComponent";
import ConfirmPasswordInputComponent from "../../components/authentification_components/ConfirmPasswordInputComponent";
import BackButtonComponent from "../../components/authentification_components/BackButtonComponent";
import ToggleSwitchComponent from "../../components/authentification_components/ToggleSwitchComponent";

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
        <PasswordInputComponent
          passwordRef={passwordRef}
          password={password}
          showPassword={showPassword}
          handlePasswordChange={handlePasswordChange}
          setShowPassword={setShowPassword}
        />
        <ConfirmPasswordInputComponent
          confirmPassword={confirmPassword}
          password={password}
          showConfirmPassword={showConfirmPassword}
          handleConfirmPasswordChange={handleConfirmPasswordChange}
          setShowConfirmPassword={setShowConfirmPassword}
        />
        <div className="registerPage_toggleSwitch">
          <div className="registerPage_toggleSwitch_respectAll">
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
