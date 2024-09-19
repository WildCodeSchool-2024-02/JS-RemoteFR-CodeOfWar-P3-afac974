import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserInfo } from "../../services/request";
import { useAuth } from "../../context/AuthContext";

import IconsComponent from "../../components/IconsComponent";
import BackButtonComponent from "../../components/authentification_components/BackButtonComponent";
import SentencePasswordCheckComponent from "../../components/authentification_components/SentencePasswordCheckComponent";

function PersonalInformationsPage() {
  const { auth } = useAuth();
  // setAuth
  // const { userInfo } = useLoaderData();

  const [email, setEmail] = useState("");
  const [emailPlaceholder] = useState("");
  // setEmailPlaceholder
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isChanged, setIsChanged] = useState(false);
  const [showConfirmation, setShowConfirm] = useState(false);

  const navigate = useNavigate();

  /* -------------------------------Condition bouton--------------------------------------- */

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsChanged(
      (event.target.value !== "" && confirmPassword !== "") || email !== ""
    );
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setIsChanged(
      (event.target.value !== "" && password !== "") || email !== ""
    );
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsChanged(
      event.target.value !== "" || (password !== "" && confirmPassword !== "")
    );
  };
  /* ------------------------------CONFIRMER---------------------------------------- */
  console.info(auth.user);
  const updateEmail = email !== "" ? email : auth.user.email;
  const updatePassword = password !== "" ? password : auth.user.password;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      try {
        const res = await updateUserInfo({
          updateEmail,
          updatePassword,
        });
        if (res && res.status === 200) {
          setShowConfirm(true);
          setTimeout(() => {
            setShowConfirm(false);
            navigate("/myinformations");
          }, 2000);
        }
      } catch (err) {
        console.error(
          "Erreur lors de la mise à jour des infos utilisateur",
          err
        );
      }
    }
  };

  console.info(updatePassword, updateEmail);

  return (
    <div className="App_sizePage">
      <h2 className="personalInformationsPage_title">
        Informations personnelles
      </h2>
      <form className="personalInformationsPage_form" onSubmit={handleSubmit}>
        <div className="personalInformationsPage_inputIcon personalInformationsPage_inputId">
          <input
            className="personalInformationsPage_input personalInformationsPage_email"
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder={emailPlaceholder || "Entrez votre email"} // Placeholder avec l'email
          />
        </div>
        {/* ---------------------------------------------------------------------------------------------------- */}
        <div className="personalInformationsPage_inputIcon">
          <input
            className="personalInformationsPage_input personalInformationsPage_password"
            value={password}
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            onChange={handlePasswordChange}
            required
          />
          <span
            className="personalInformationsPage_showPassword"
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
          <div className="personalInformationsPage_passwordCondition">
            <IconsComponent
              className="personalInformationsPage_passwordConditionIcons"
              src={password.length >= 8 ? "check" : "cross"}
            />{" "}
            {`Longueur du mot de passe: ${password.length} >= 8`}
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------- */}
        <div className="personalInformationsPage_inputIcon">
          <input
            className="personalInformationsPage_input personalInformationsPage_passwordConfirm"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirmer mot de passe"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <span
            className="personalInformationsPage_showPassword"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) =>
              event.key === " " && setShowConfirmPassword(!showConfirmPassword)
            }
          >
            <IconsComponent
              className="personalInformationsPage_showPasswordConfirmIcon"
              src={showConfirmPassword ? "eyeHide" : "eyeShow"}
              alt={
                showConfirmPassword
                  ? "Cacher le mot de passe"
                  : "Afficher le mot de passe"
              }
            />
          </span>
          <div className="personalInformationsPage_passwordConfirmCondition ">
            <SentencePasswordCheckComponent
              className="personalInformationsPage_passwordConditionIcons"
              password={password}
              confirmPassword={confirmPassword}
            />
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------- */}
        {isChanged && (
          <button
            className="personalInformationsPage_submitButton"
            type="submit"
          >
            Confirmer
          </button>
        )}

        <BackButtonComponent to="/authentification" />
      </form>
      {showConfirmation && (
        <div className="personalInformationsPage_confirmation">
          <p>Email actuel : {email}</p>
          <p>Les modifications ont été enregistrées avec succès !</p>
        </div>
      )}
    </div>
  );
}

export default PersonalInformationsPage;
