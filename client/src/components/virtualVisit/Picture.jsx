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
        src={`${import.meta.env.VITE_API_URL}${artwork.pictures}`}
        alt={`${artwork.nom_de_l_oeuvre} de ${artwork.artiste}`}
      />
      <section className="information">
        <div className="title">
          <p>{artwork.nom_de_l_oeuvre}</p>
          <p>{artwork.artiste}</p>
        </div>
        <p className="description">{artwork.description}</p>
      </section>
    </section>
  );
}

Picture.propTypes = {
  artwork: PropTypes.shape({
    pictures: PropTypes.string,
    nom_de_l_oeuvre: PropTypes.string,
    artiste: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Picture;
