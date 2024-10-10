import PropTypes from "prop-types";

import "../../assets/styles/Picture.css";

function Picture({ artwork }) {
  if (!artwork) {
    return (
      <section className="artworkVisualisation">
        <p> </p>
      </section>
    );
  }
  return (
    <section className="artworkVisualisation">
      <img
        src={`${import.meta.env.VITE_API_URL}${artwork.image_url}`}
        alt={`${artwork.title} de ${artwork.user}`}
      />
      <section className="information">
        <div className="title">
          <p>{artwork.title}</p>
          <p>{artwork.user}</p>
        </div>
        <p className="description">{artwork.description}</p>
      </section>
    </section>
  );
}

Picture.propTypes = {
  artwork: PropTypes.shape({
    image_url: PropTypes.string,
    title: PropTypes.string,
    user: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Picture;
