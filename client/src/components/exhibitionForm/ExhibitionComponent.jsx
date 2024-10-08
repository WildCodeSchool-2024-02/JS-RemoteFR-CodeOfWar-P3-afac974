import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Masonry from "react-masonry-css";
import ConfirmationButton from "./ConfirmationButton";

import {
  getExhibitionArtwork,
  deleteExhibitionArtwork,
  deleteExhibition,
  getExhibition,
} from "../../services/request";

function ExhibitionComponent({
  id,
  setExhibitionArtworks,
  exhibitionArtworks,
}) {
  const [exhibition, setExhibition] = useState({});

  const navigate = useNavigate();

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  useEffect(() => {
    const fetchExhibition = async () => {
      try {
        const response = await getExhibition(id);
        setExhibition(response);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de l'exposition :",
          error
        );
      }
    };
    fetchExhibition();
  }, [id]);

  const dateBegin = exhibition.date_begin;
  const dateStart = new Date(dateBegin);
  const dayStart = dateStart.getDate();
  const monthStart = dateStart.getMonth() + 1;
  const yearStart = dateStart.getFullYear();

  const formattedDateStart = `${dayStart}-${monthStart}-${yearStart}`;

  const dateFinish = exhibition.date_end;
  const dateEnd = new Date(dateFinish);
  const dayEnd = dateEnd.getDate();
  const monthEnd = dateEnd.getMonth() + 1;
  const yearEnd = dateEnd.getFullYear();

  const formattedDateEnd = `${dayEnd}-${monthEnd}-${yearEnd}`;

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
        navigate("/exhibitionForm");
      } catch (error) {
        console.error(
          "Erreur lors de la suppression de l'exposition ou des œuvres:",
          error
        );
      }
    }
  };
  return (
    <>
      <ConfirmationButton onConfirm={handleDeleteExhibition} />
      <section className="exhibition">
        <div className="exhibitionInformation">
          <h2>Information</h2>
          <h3>Titre de l'exposition</h3>
          <p>{exhibition.name}</p>
          <h3>Description</h3>
          <p>{exhibition.description}</p>
          {exhibition.type === "TEMPORARY" && (
            <>
              <h3>Début de l'exposition</h3>
              <p>{formattedDateStart}</p>
              <h3>Fin de l'exposition</h3>
              <p>{formattedDateEnd}</p>
            </>
          )}
        </div>
        <div className="exhibitionArtwork">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {exhibitionArtworks.map((artwork) => (
              <div key={artwork.id} className="artwork-container">
                <img
                  src={`${import.meta.env.VITE_API_URL}${artwork.image_url}`}
                  alt={artwork.title}
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
        </div>
      </section>
    </>
  );
}

ExhibitionComponent.propTypes = {
  id: PropTypes.number.isRequired,
}.isRequired;

export default ExhibitionComponent;
