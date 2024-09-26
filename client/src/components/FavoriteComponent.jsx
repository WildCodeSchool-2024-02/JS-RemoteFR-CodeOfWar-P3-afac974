import { Link, useParams, useRevalidator } from "react-router-dom";
import PropTypes from "prop-types";
import { useFavorites } from "../contexts/FavoritesContext";

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
    <section>
      {fav && fav.image_url ? (
        <>
          <Link to={`/artwork/${fav.artwork_id}`}>
            <img
              src={`${import.meta.env.VITE_API_URL}${fav.image_url}`}
              alt={fav.title}
            />
          </Link>
          <button
            className="like_button"
            type="button"
            onClick={handleRemoveFavorite}
          >
            {" Supprimer 💔"}
          </button>
        </>
      ) : (
        "Loading..."
      )}
    </section>
  );
}

FavoritesComponent.propTypes = {
  fav: PropTypes.shape({
    artwork_id: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoritesComponent;
