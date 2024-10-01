import { useState } from "react";
import { updateUserInfo } from "../../services/request";
import { useAuth } from "../../contexts/AuthContext";
import BackButtonComponent from "../../components/authentification_components/BackButtonComponent";

function useRevalidator() {
  const { auth, updateUser } = useAuth();

  const revalidateData = async () => {
    try {
      const res = await fetch(`/api/user/${auth.user.id}`);

      if (!res.ok) {
        throw new Error(`Erreur HTTP : ${res.status}`);
      }

      const updatedUserData = await res.json();
      updateUser(updatedUserData);
    } catch (error) {
      console.error(
        "Erreur lors du rechargement des donnees utilisateur",
        error
      );
    }
  };

  return revalidateData;
}

function PersonalInformationsPage() {
  const { auth, updateUser } = useAuth();
  const [pseudo, setPseudo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [biography, setBiography] = useState("");
  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [avatar, setAvatar] = useState("");

  const [isChanged, setIsChanged] = useState(false);
  const [showPopover, setShowPopover] = useState(false);

  const revalidateData = useRevalidator();

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
  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
    setIsChanged(event.target.value !== "");
  };
  const handleBiographyChange = (event) => {
    setBiography(event.target.value);
    setIsChanged(event.target.value !== "");
  };
  const handleWebsiteChange = (event) => {
    setWebsite(event.target.value);
    setIsChanged(event.target.value !== "");
  };
  const handleInstagramChange = (event) => {
    setInstagram(event.target.value);
    setIsChanged(event.target.value !== "");
  };
  const handleTwitterChange = (event) => {
    setTwitter(event.target.value);
    setIsChanged(event.target.value !== "");
  };
  const handleFacebookChange = (event) => {
    setFacebook(event.target.value);
    setIsChanged(event.target.value !== "");
  };
  const handleLinkedinChange = (event) => {
    setLinkedin(event.target.value);
    setIsChanged(event.target.value !== "");
  };
  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
    setIsChanged(event.target.value !== "");
  };

  /* ------------------------------CONFIRMER---------------------------------------- */

  const updatePseudo = pseudo !== "" ? pseudo : auth.user.pseudo;
  const updateFirstName = firstName !== "" ? firstName : auth.user.firstname;
  const updateEmail = email !== "" ? email : auth.user.email;
  const updatelastName = lastName !== "" ? lastName : auth.user.lastname;
  const updateNationality =
    nationality !== "" ? nationality : auth.user.nationality;
  const updateBiography = biography !== "" ? biography : auth.user.biography;
  const updateWebsite = website !== "" ? website : auth.user.website;
  const updateInstagram = instagram !== "" ? instagram : auth.user.instagram;
  const updateTwitter = twitter !== "" ? twitter : auth.user.twitter;
  const updateFacebook = facebook !== "" ? facebook : auth.user.facebook;
  const updateLinkedin = linkedin !== "" ? linkedin : auth.user.linkedin;
  const updateAvatar = avatar !== "" ? avatar : auth.user.avatar;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      pseudo: updatePseudo,
      firstname: updateFirstName,
      lastname: updatelastName,
      email: updateEmail,
      nationality: updateNationality,
      biography: updateBiography,
      website: updateWebsite,
      instagram: updateInstagram,
      twitter: updateTwitter,
      facebook: updateFacebook,
      linkedin: updateLinkedin,
      avatar: updateAvatar,
      id: auth.user.id,
    };
    try {
      const res = await updateUserInfo(userData);
      if (res && res.status === 204) {
        updateUser(userData);
        setPseudo(userData.pseudo);
        setFirstName(userData.firstname);
        setLastName(userData.lastname);
        setEmail(userData.email);
        setNationality(userData.nationality);
        setBiography(userData.biography);
        setWebsite(userData.website);
        setInstagram(userData.instagram);
        setTwitter(userData.twitter);
        setFacebook(userData.facebook);
        setLinkedin(userData.linkedin);
        setAvatar(userData.avatar);

        setShowPopover(true);

        await revalidateData();
        setTimeout(() => setShowPopover(false), 2000);
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

        <div className="personalInformationsPage_inputIcon personalInformationsPage_inputId">
          <input
            className="personalInformationsPage_input personalInformationsPage_nationality"
            value={nationality}
            onChange={handleNationalityChange}
            type="text"
            placeholder={auth.user.nationality || "Nationality"}
          />
        </div>
        <div className="personalInformationsPage_inputIcon personalInformationsPage_inputId">
          <input
            className="personalInformationsPage_input personalInformationsPage_biography"
            value={biography}
            onChange={handleBiographyChange}
            type="text"
            placeholder={auth.user.biography || "Biography"}
          />
        </div>
        <div className="personalInformationsPage_inputIcon personalInformationsPage_inputId">
          <input
            className="personalInformationsPage_input personalInformationsPage_website"
            value={website}
            onChange={handleWebsiteChange}
            type="text"
            placeholder={auth.user.website || "Website"}
          />
        </div>
        <div className="personalInformationsPage_inputIcon personalInformationsPage_inputId">
          <input
            className="personalInformationsPage_input personalInformationsPage_instagram"
            value={instagram}
            onChange={handleInstagramChange}
            type="text"
            placeholder={auth.user.instagram || "Instagram"}
          />
        </div>
        <div className="personalInformationsPage_inputIcon personalInformationsPage_inputId">
          <input
            className="personalInformationsPage_input personalInformationsPage_twitter"
            value={twitter}
            onChange={handleTwitterChange}
            type="text"
            placeholder={auth.user.twitter || "Twitter"}
          />
        </div>
        <div className="personalInformationsPage_inputIcon personalInformationsPage_inputId">
          <input
            className="personalInformationsPage_input personalInformationsPage_facebook"
            value={facebook}
            onChange={handleFacebookChange}
            type="text"
            placeholder={auth.user.facebook || "Facebook"}
          />
        </div>
        <div className="personalInformationsPage_inputIcon personalInformationsPage_inputId">
          <input
            className="personalInformationsPage_input personalInformationsPage_linkedin"
            value={linkedin}
            onChange={handleLinkedinChange}
            type="text"
            placeholder={auth.user.linkedin || "Linkedin"}
          />
        </div>
        <div className="personalInformationsPage_inputIcon personalInformationsPage_inputId">
          <input
            className="personalInformationsPage_input personalInformationsPage_avatar"
            value={avatar}
            onChange={handleAvatarChange}
            type="text"
            placeholder={auth.user.avatar || "Avatar"}
          />
        </div>
        {/* --------------------------------CONFIRM--------------------------- */}
        {isChanged && (
          <button
            className="personalInformationsPage_button personalInformationsPage_ConfirmButton"
            type="submit"
          >
            Confirmer
          </button>
        )}
        <BackButtonComponent to="/authentification" />
      </form>

      {showPopover && (
        <div className="personalInformationsPage_popover">
          Informations mises à jour avec succès !
        </div>
      )}
    </div>
  );
}

export default PersonalInformationsPage;
