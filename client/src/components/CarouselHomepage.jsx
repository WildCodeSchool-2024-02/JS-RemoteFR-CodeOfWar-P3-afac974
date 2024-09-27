import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../assets/styles/homepage.css";

function CarouselHomepage({ artwork, exhibition, user }) {
  const userLength = user.length;
  const artworkLength = artwork.length;
  const exhibitionLength = exhibition.length;

  // Si les tableaux sont vides, on renvoie un contenu alternatif
  if (!userLength || !artworkLength || !exhibitionLength) {
    return <p>Contenu non disponible pour le moment.</p>;
  }

  // Calcul des index aléatoires, en s'assurant qu'ils sont dans les bornes
  const randomUser = Math.max(0, Math.floor(Math.random() * userLength));
  const randomArtwork = Math.max(0, Math.floor(Math.random() * artworkLength));
  const randomExhibition = Math.max(
    0,
    Math.floor(Math.random() * exhibitionLength)
  );

  return (
    <div className="horizontal_scroll_carousel">
      <figure>
        <Link to="/exhibition">
          <img
            className="first_carousel_image"
            src={`${import.meta.env.VITE_API_URL}${artwork[randomArtwork].image_url}`}
            alt={artwork[randomArtwork].title || "Exposition"}
          />
          <figcaption className="carrouselHomepage_informations">
            <h2 className="carrouselHomepage_title">
              {exhibition[randomExhibition].name || "Nom d'exposition"}
            </h2>
            <p>
              {exhibition[randomExhibition].date_begin?.substring(0, 7) ||
                "Date début"}{" "}
              /{" "}
              {exhibition[randomExhibition].date_end?.substring(0, 7) ||
                "Date fin"}
            </p>
            <p>Savoir Plus...</p>
          </figcaption>
        </Link>
      </figure>

      <figure>
        <Link to="/artists">
          <img
            src={`${import.meta.env.VITE_API_URL}${artwork[1]?.image_url || "default_image_url.jpg"}`}
            alt={artwork[1]?.title || "Artiste"}
          />
          <figcaption className="carrouselHomepage_informations">
            <h2 className="carrouselHomepage_title">
              {user[randomUser]?.pseudo || "Artiste"}
            </h2>
            <p>Savoir Plus...</p>
          </figcaption>
        </Link>
      </figure>

      <figure>
        <Link to="/artworks">
          <img
            src={`${import.meta.env.VITE_API_URL}${artwork[2]?.image_url || "default_image_url.jpg"}`}
            alt={artwork[2]?.title || "Oeuvre"}
          />
          <figcaption className="carrouselHomepage_informations">
            <h2 className="carrouselHomepage_title">
              {artwork[randomArtwork]?.title || "Titre de l'oeuvre"}
            </h2>
            <p>Savoir Plus...</p>
          </figcaption>
        </Link>
      </figure>
    </div>
  );
}

CarouselHomepage.propTypes = {
  artwork: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
  exhibition: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      date_begin: PropTypes.string,
      date_end: PropTypes.string,
    })
  ).isRequired,
  user: PropTypes.arrayOf(
    PropTypes.shape({
      pseudo: PropTypes.string,
    })
  ).isRequired,
};

export default CarouselHomepage;
