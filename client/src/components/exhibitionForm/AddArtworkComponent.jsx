import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

import { getArtworks, postExhibitionArtwork

 } from "../../services/request";

function AddArtworkComponent({id}) {
    const [artworks, setArtworks] = useState([]);
    
    const [selectedArtworkId, setSelectedArtworkID] = useState (null)
    const handleSelectChange = async (event) => {
      const exhibitionId = event.target.value;
      setSelectedArtworkID(exhibitionId);
    };
    useEffect(()=> {
        getArtworks().then(setArtworks)
    }, [])
    const handleAdd = async () => {
        if (selectedArtworkId) {
          try {
            await postExhibitionArtwork(id, selectedArtworkId);
            setArtworks((prevArtworks) =>
              prevArtworks.filter((artwork) => artwork.id !== selectedArtworkId)
            );
            setSelectedArtworkID(null);
          } catch (error) {
            console.error("Erreur lors de l'ajout de l'œuvre:", error);
          }
        }
      };
    
  return (
    <>
    <select value={selectedArtworkId} onChange={handleSelectChange}>
    <option value="">Sélectionner une oeuvres</option>
    {artworks.map((artwork) => (
      <option key={artwork.id} value={artwork.id}>
        {artwork.title}
      </option> 
    ))}
  </select>
  <button type="button" onClick={handleAdd} disabled={!selectedArtworkId} > Ajouter </button>
  </>
  )
}

AddArtworkComponent.propTypes = {
    id: PropTypes.number.isRequired,
  }.isRequired;
export default AddArtworkComponent