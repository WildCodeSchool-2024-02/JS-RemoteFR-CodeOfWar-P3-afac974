import { useState } from "react";
import { updateUserInfo } from "../../services/request";
import { useAuth } from "../../context/AuthContext";

import ConfirmDelete from "../../components/user_connected_components/ConfirmDeleteComponent";
import BackButtonComponent from "../../components/authentification_components/BackButtonComponent";

function PersonalInformationsPage() {
  const { auth, updateUser } = useAuth();
  const [pseudo, setPseudo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [showConfirmDeleteAccount, setShowConfirmDeleteAccount] =
    useState(false);

  const [isChanged, setIsChanged] = useState(false);

  /* -------------------------------Condition bouton--------------------------------------- */
  const handlePseudoChange = (event) => {
    setPseudo(event.target.value);
    setIsChanged(event.target.value !== "");
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setIsChanged(event.target.value !== "");
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setIsChanged(event.target.value !== "");
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsChanged(event.target.value !== "");
  };

  /* ------------------------------DELETE---------------------------------------- */
  const handleChangeDeleteAccount = () => {
    setShowConfirmDeleteAccount(true);
  };

  const handleCloseDeleteAccount = () => {
    setShowConfirmDeleteAccount(false);
  };
  /* ------------------------------CONFIRMER---------------------------------------- */

  const updatePseudo = pseudo !== "" ? pseudo : auth.user.pseudo;
  const updateFirstName = firstName !== "" ? firstName : auth.user.firstname;
  const updatelastName = lastName !== "" ? lastName : auth.user.lastname;
  const updateEmail = email !== "" ? email : auth.user.email;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      pseudo: updatePseudo,
      firstname: updateFirstName,
      lastname: updatelastName,
      email: updateEmail,
    };
    try {
      const res = await updateUserInfo(auth.user.id, userData);
      if (res && res.status === 204) {
        updateUser(userData);
        setPseudo(userData.pseudo);
        setFirstName(userData.firstname);
        setLastName(userData.lastname);
        setEmail(userData.email);
      }
    } catch (err) {
      console.error("Erreur lors de la mise à jour des infos utilisateur", err);
    }
  };
  return (
    <div className="App_sizePage">
      <h2 className="personalInformationsPage_title">
        Informations personnelles
      </h2>

      <form className="personalInformationsPage_form" onSubmit={handleSubmit}>
        <div className="personalInformationsPage_inputIcon personalInformationsPage_inputId">
          <input
            className="personalInformationsPage_input personalInformationsPage_pseudo"
            value={pseudo}
            onChange={handlePseudoChange}
            type="text"
            placeholder={auth.user.pseudo || "Pseudo"}
          />
        </div>
        <div className="personalInformationsPage_inputIcon personalInformationsPage_inputId">
          <input
            className="personalInformationsPage_input personalInformationsPage_firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            type="text"
            placeholder={auth.user.firstname || "Prénom"}
          />
        </div>
        <div className="personalInformationsPage_inputIcon personalInformationsPage_inputId">
          <input
            className="personalInformationsPage_input personalInformationsPage_lastName"
            value={lastName}
            onChange={handleLastNameChange}
            type="text"
            placeholder={auth.user.lastname || "Nom"}
          />
        </div>
        <div className="personalInformationsPage_inputIcon personalInformationsPage_inputId">
          <input
            className="personalInformationsPage_input personalInformationsPage_email"
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder={auth.user.email || "Email"}
          />
        </div>

        {isChanged && (
          <button
            className="personalInformationsPage_button personalInformationsPage_ConfirmButton"
            type="submit"
          >
            Confirmer
          </button>
        )}
        <div>
          <button
            className="personalInformationsPage_button personalInformationsPage_deleteAccountButton"
            onClick={handleChangeDeleteAccount}
            type="button"
          >
            Supprimer le compte
          </button>
          {showConfirmDeleteAccount && (
            <ConfirmDelete onClose={handleCloseDeleteAccount} />
          )}
        </div>
        <BackButtonComponent to="/authentification" />
      </form>
    </div>
  );
}

export default PersonalInformationsPage;
