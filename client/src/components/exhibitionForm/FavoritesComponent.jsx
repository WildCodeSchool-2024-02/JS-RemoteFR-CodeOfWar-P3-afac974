import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getArtwork } from "../../services/request";

function FavoritesComponent({ tools }) {
  const { fav } = tools;
  const [favDetails, setFavDetails] = useState();

  useEffect(() => {
    const loadFavoriteDetails = async () => {
      try {
        setFavDetails(await getArtwork(fav.artwork_id));
      } catch (error) {
        console.error("Error artwork details:", error);
      }
    };
    loadFavoriteDetails();
  }, [fav.artwork_id]);

  return (
    <section>
      {favDetails && favDetails.image_url ? (
        <Link to={`/artwork/${fav.artwork_id}`}>
          <img
            src={`${import.meta.env.VITE_API_URL}${favDetails.image_url}`}
            alt={favDetails.title}
          />
        </Link>
      ) : (
        "Loading..."
      )}
    </section>
  );
}

FavoritesComponent.propTypes = {
  tools: PropTypes.shape({
    fav: PropTypes.shape({
      artwork_id: PropTypes.number.isRequired,
    }).isRequired,
    index: PropTypes.number,
    favorite: PropTypes.shape,
    setFavorite: PropTypes.func,
  }).isRequired,
};

export default FavoritesComponent;
