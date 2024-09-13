import { PropTypes } from "prop-types";
import { useState } from "react";

import { postExhibitionArtwork, getExhibitionArtwork } from "../../services/request";

function AddArtworkComponent({id,artworks, setExhibitionArtworks, exhibitionArtworks} ) {
  const [selectedArtworkId, setSelectedArtworkID] = useState("");
  const handleSelectChange = async (event) => {
    const artworkId = event.target.value;
    setSelectedArtworkID(artworkId);
  };

  const handleAdd = async () => {
    if (selectedArtworkId) {
      try {
        await postExhibitionArtwork(id, selectedArtworkId);
  
        const updatedArtworks = await getExhibitionArtwork(id);
        setExhibitionArtworks(updatedArtworks);
  
        setSelectedArtworkID("");
      } catch (error) {
        console.error(
          "Erreur lors de l'ajout de l'œuvre à l'exposition:",
          error
        );
      }
    }
  };
  const availableArtworks = artworks.filter(
    (artwork) => !exhibitionArtworks.some(
      (exhibitionArtwork) => exhibitionArtwork.id === artwork.id
    )
  );
  return (
    <>
      <select value={selectedArtworkId} onChange={handleSelectChange}>
        <option value="">Sélectionner une oeuvres</option>
        {availableArtworks.map((artwork) => (
          <option key={artwork.id} value={artwork.id}>
            {artwork.title}
          </option>
        ))}
      </select>
      <button type="button" onClick={handleAdd} disabled={!selectedArtworkId}>
        Ajouter
      </button>
    </>
  );
}

AddArtworkComponent.propTypes = {
  id: PropTypes.number
}.isRequired;
export default AddArtworkComponent;
