import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Masonry from "react-masonry-css";
import "../../assets/styles/exhibitionForm.css";
import ConfirmButton from "./ConfirmButton";

import {
  getExhibitionArtwork,
  deleteExhibitionArtwork,
  deleteExhibition,
} from "../../services/request";

function ExhibitionComponent({
  id,
  setExhibitionArtworks,
  exhibitionArtworks,
}) {
  const navigate = useNavigate();
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

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
  const handleDeleteExhibition = async () => {
    if (id) {
      try {
        // Suppression des œuvres d'art associées avant de supprimer l'exposition
        if (exhibitionArtworks && exhibitionArtworks.length > 0) {
          await Promise.all(
            exhibitionArtworks.map((artwork) =>
              deleteExhibitionArtwork(id, artwork.id)
            )
          );
        }
        // Suppression de l'exposition après que toutes les œuvres ont été supprimées
        await deleteExhibition(id);
        console.info("Exposition supprimée avec succès");
        navigate(0)
      } catch (error) {
        console.error("Erreur lors de la suppression de l'exposition ou des œuvres:", error);
      }
    }
  };

  return (
    <>
      <ConfirmButton onConfirm={handleDeleteExhibition} />

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {exhibitionArtworks.map((artwork) => (
          <div key={artwork.id} className="artwork-container">
            <img
              src={`${import.meta.env.VITE_API_URL}${artwork.pictures}`}
              alt={artwork.nom_de_l_oeuvre}
            />
            <button
              type="button"
              className="close-button"
              onClick={() => handleDelete(artwork.id)}
            >
              X
            </button>
          </div>
        ))}
      </Masonry>
    </>
  );
}

ExhibitionComponent.propTypes = {
  id: PropTypes.number.isRequired,
}.isRequired;

export default ExhibitionComponent;
