import { useState } from "react";
import "../../assets/styles/confirmButton.css";

function ConfirmButton() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationInput, setConfirmationInput] = useState("");

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    if (confirmationInput === "CONFIRMER") {
      setShowConfirmation(false);
      console.info("GG");
    } else {
      console.error("Le texte saisi est incorrect.");
    }
  };

  return (
    <div>
      <button type="button" onClick={handleDeleteClick}>
        Supprimer
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

export default ConfirmButton;
