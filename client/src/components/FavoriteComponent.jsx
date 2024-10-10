import { Link, useParams, useRevalidator } from "react-router-dom";
import PropTypes from "prop-types";
import { useFavorites } from "../contexts/FavoritesContext";
import brokenheart from "../assets/images/brokenheart.svg";

function FavoritesComponent({ fav }) {
  const { removeFavorite } = useFavorites();
  const { id } = useParams();
  const revalidator = useRevalidator();

  const handleRemoveFavorite = async () => {
    try {
      await removeFavorite(fav.artwork_id, id);
      revalidator.revalidate();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="favorite_card">
      {fav && fav.image_url ? (
        <>
          <Link to={`/artwork/${fav.artwork_id}`}>
            <img
              src={`${import.meta.env.VITE_API_URL}${fav.image_url}`}
              alt={fav.title}
            />
          </Link>
          <button
            className="favorite_card_button"
            type="button"
            onClick={handleRemoveFavorite}
          >
            <img src={brokenheart} alt="Remove from favorites" />
          </button>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

FavoritesComponent.propTypes = {
  fav: PropTypes.shape({
    artwork_id: PropTypes.number,
    image_url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default FavoritesComponent;
