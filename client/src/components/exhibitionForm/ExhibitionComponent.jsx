import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { getExhibitionArtwork, deleteExhibitionArtwork } from "../../services/request";

function ExhibitionComponent({id}) {
    
    const [artworks, setArtworks] = useState([]);
    useEffect(()=> {
        getExhibitionArtwork(id).then(setArtworks)
    }, [id])

    const [selectedArtworkId, setSelectedArtworkID] = useState (null)
    const handleSelectChange = async (event) => {
      const exhibitionId = event.target.value;
      setSelectedArtworkID(exhibitionId);
    };

    const handleDelete = async () => {
      if (selectedArtworkId) {
        try {
          await deleteExhibitionArtwork(id, selectedArtworkId);
          setArtworks((prevArtworks) =>
            prevArtworks.filter((artwork) => artwork.id !== selectedArtworkId)
          );
          setSelectedArtworkID(null);
        } catch (error) {
          console.error("Erreur lors de la suppression de l'œuvre:", error);
        }
      }
    };
  
  return (
    <>
    <select value={selectedArtworkId} onChange={handleSelectChange}>
    <option value="">Sélectionner une oeuvres</option>
    {artworks.map((artwork) => (
      <option key={artwork.id} value={artwork.id}>
        {artwork.nom_de_l_oeuvre}
      </option> 
    ))}
  </select>
  <button type="button" onClick={handleDelete} disabled={!selectedArtworkId} > Retirer </button>
  </>
  )
}
ExhibitionComponent.propTypes = {
    id: PropTypes.number.isRequired,
  }.isRequired;
  
export default ExhibitionComponent