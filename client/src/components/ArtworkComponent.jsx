import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ArtworkComponent({ artwork }) {
  return (
    <section className="artworkcomponent_expo_img">
      <Link to={`/artwork/${artwork.id}`}>
        <img
          className="artworkPage_artworklist"
          src={`${import.meta.env.VITE_API_URL}${artwork.image_url}`}
          alt={artwork.title}
        />
      </Link>
      <div className="figcaption_md hidden">
        <h2>{artwork.title}</h2>
        <p>{artwork.description}</p>
      </div>
    </section>
  );
}

ArtworkComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}.isRequired;

export default ArtworkComponent;
