import PropTypes from 'prop-types';

function Picture({artwork}) {

  if (!artwork) {
    return null;
  }
console.info("picture",artwork)
  return (
    <>
      <img src={`${import.meta.env.VITE_API_URL}${artwork.pictures}`} alt="Artwork" />
      <section className="information">
        <div>
          <p>{artwork.nom_de_l_oeuvre}</p>
          <p>{artwork.artiste}</p>
        </div>
        <p>{artwork.description}</p>
      </section>
    </>
  );
}

Picture.propTypes = {
  artwork: PropTypes.shape({
    pictures: PropTypes.string,
    nom_de_l_oeuvre: PropTypes.string,
    artiste: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
};

export default Picture
