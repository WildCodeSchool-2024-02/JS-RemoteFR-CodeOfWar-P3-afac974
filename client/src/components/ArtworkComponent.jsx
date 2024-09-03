import PropTypes from "prop-types";

function ArtworkComponent({ artwork }) {
  return (
    <section key={artwork.id} className="expo_img">
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
