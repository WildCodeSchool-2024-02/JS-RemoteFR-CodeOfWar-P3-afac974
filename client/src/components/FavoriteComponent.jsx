import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function FavoritesComponent({ fav }) {
  return (
    <section>
      {fav && fav.image_url ? (
        <Link to={`/artwork/${fav.artwork_id}`}>
          <img
            src={`${import.meta.env.VITE_API_URL}${fav.image_url}`}
            alt={fav.title}
          />
        </Link>
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
