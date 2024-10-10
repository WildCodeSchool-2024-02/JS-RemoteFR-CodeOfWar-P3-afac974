import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getExhibitionArtwork } from "../services/request";
import ArtworkComponent from "./ArtworkComponent";

export default function ExhibitionComponent({ exhibition }) {
  const [exhibArtworks, setExhibArtworks] = useState([]);

  const actualDate = Date.now();
  const exhibitionStartDate = new Date(exhibition.formatedBeginDate).getTime();

  useEffect(() => {
    const fetchExhibitionArtworks = async () => {
      try {
        const artworks = await getExhibitionArtwork(exhibition.id);
        setExhibArtworks(artworks);
      } catch (error) {
        console.error("Erreur lors de la récupération des œuvres:", error);
      }
    };

    if (exhibition?.id) {
      fetchExhibitionArtworks();
    }
  }, [exhibition]);

  return (
    <>
      <div>
        <h2>{exhibition.name}</h2>
        <p>{exhibition.description}</p>
        <p>Date de début : {exhibition.formatedBeginDate}</p>
        <p>Date de fin : {exhibition.formatedEndDate}</p>
        <Link
          className="exhibitionComponent_buttonVisit"
          to={`/visit/${exhibition.id}`}
        >
          Visite Virtuel ici
        </Link>
      </div>
      {actualDate >= exhibitionStartDate ? (
        <div>
          {exhibArtworks.map((artwork) => (
            <ArtworkComponent artwork={artwork} key={artwork.id} />
          ))}
        </div>
      ) : (
        <div>L'exposition n'est pas disponible.</div>
      )}
    </>
  );
}

ExhibitionComponent.propTypes = {
  exhibition: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    formatedBeginDate: PropTypes.string,
    formatedEndDate: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
