import PropTypes from "prop-types";
import { useState } from "react";

import IconsComponent from "../IconsComponent";

function ConfirmDeleteComponent({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleConfirmClick = async (event) => {
    event.preventDefault();
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <div className="confirmDeleteComponent_area">
      <h3 className="confirmDeleteComponent_title">
        Confirmer la suppression du compte
      </h3>
      <b className="confirmDeleteComponent_alert">
        Attention la suppression des données est définitive
      </b>
      <div
        className="confirmDeleteComponent_form"
        onSubmit={handleConfirmClick}
      >
        <input
          className="confirmDeleteComponent_input confirmDeleteComponent_passwordConfirm"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type={showPassword ? "text" : "password"}
          placeholder="Entrez votre mot de passe..."
          required
        />
        <span
          className="confirmDeleteComponent_showPassword"
          onClick={() => setShowPassword(!showPassword)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              setShowPassword(!showPassword);
            }
          }}
          role="button"
          tabIndex={0}
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

        <button className="confirmDeleteComponent_confirmButton" type="submit">
          Confirmer
        </button>
        <button
          className="confirmDeleteComponent_cancelButton"
          type="button"
          onClick={handleCancelClick}
        >
          Annuler
        </button>
      </div>
    </div>
  );
}
ConfirmDeleteComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default ConfirmDeleteComponent;
