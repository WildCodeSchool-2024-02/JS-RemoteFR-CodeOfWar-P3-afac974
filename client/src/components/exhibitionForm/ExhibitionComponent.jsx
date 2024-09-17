import { PropTypes } from "prop-types";
import { useEffect } from "react";

import {
  getExhibitionArtwork,
  deleteExhibitionArtwork,
} from "../../services/request";

function ExhibitionComponent({
  id,
  setExhibitionArtworks,
  exhibitionArtworks,
}) {
  useEffect(() => {
    getExhibitionArtwork(id).then(setExhibitionArtworks);
  }, [id, setExhibitionArtworks]);

  const handleDelete = async (artworkId) => {
    if (artworkId) {
      try {
        await deleteExhibitionArtwork(id, artworkId);
        setExhibitionArtworks((prevArtworks) =>
          prevArtworks.filter((artwork) => artwork.id !== artworkId)
        );
      } catch (error) {
        console.error("Erreur lors de la suppression de l'œuvre:", error);
      }
    }
  };

  return (
    <>
      {exhibitionArtworks.map((artwork) => (
        <div key={artwork.id}>
          <img
            src={`${import.meta.env.VITE_API_URL}${artwork.pictures}`}
            alt={artwork.nom_de_l_oeuvre}
          />
          <button type="button" onClick={() => handleDelete(artwork.id)}>
            Retirer
          </button>
        </div>
      ))}
    </>
  );
}

ExhibitionComponent.propTypes = {
  id: PropTypes.number.isRequired,
}.isRequired;

export default ExhibitionComponent;
