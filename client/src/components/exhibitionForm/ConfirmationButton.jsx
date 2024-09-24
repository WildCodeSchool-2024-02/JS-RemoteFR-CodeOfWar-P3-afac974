import { useState } from "react";
import PropTypes from "prop-types";
import "../../assets/styles/confirmButton.css";

function ConfirmationButton({ onConfirm }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationInput, setConfirmationInput] = useState("");

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    if (confirmationInput === "CONFIRMER") {
      onConfirm();
      setShowConfirmation(false);
    } else {
      console.error("Le texte saisi est incorrect.");
    }
  };

  return (
    <div>
      <button type="button" onClick={handleDeleteClick}>
        Cloturer l'exposition
      </button>

      {showConfirmation && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirmation de suppression</h3>
            <p>Pour confirmer, tapez "CONFIRMER" :</p>
            <input
              type="text"
              value={confirmationInput}
              onChange={(e) => setConfirmationInput(e.target.value)}
            />
            <div className="modal-buttons">
              <button type="button" onClick={handleConfirm}>
                Confirmer
              </button>
              <button type="button" onClick={() => setShowConfirmation(false)}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConfirmationButton;

ConfirmationButton.propTypes = {
  onConfirm: PropTypes.func.isRequired,
};
