import PropTypes from "prop-types";

function ArtworkComponent({ artwork }) {
  return (
    <section key={artwork.id} className="artworkcomponent_expo_img">
      <img
        className="artworkPage_artworklist"
        src={`${import.meta.env.VITE_API_URL}${artwork.image_url}`}
        alt={artwork.title}
      />
      <h3>{artwork.artist_name}</h3>
      <h2>{artwork.title}</h2>
      <figcaption>{artwork.description}</figcaption>
    </section>
  );
}

ArtworkComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}.isRequired;

export default ArtworkComponent;
