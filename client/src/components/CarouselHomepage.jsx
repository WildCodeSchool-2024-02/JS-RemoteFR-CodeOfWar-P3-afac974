import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../assets/styles/homepage.css";

function CarouselHomepage({ artwork, exhibition, artist }) {
  const artistLength = artist.length;
  const artworkLength = artwork.length;
  const exhibitionLength = exhibition.length;

  const randomArtist = Math.ceil(Math.random() * artistLength - 1);
  const randomArtwork = Math.ceil(Math.random() * artworkLength - 1);
  const randomExhibition = Math.ceil(Math.random() * exhibitionLength - 1);

  return (
    <div className="horizontal_scroll_carousel">
      <figure>
        <Link to="/exhibition">
          <img
            src={`${import.meta.env.VITE_API_URL}${artwork[randomArtwork].image_url}`}
            alt={artwork[0].title}
          />
        </Link>

        <figcaption>
          <h2>{exhibition[randomExhibition].name}</h2>
          <p>
            {exhibition[0].date_begin.substring(0, 7)} /{" "}
            {exhibition[0].date_end.substring(0, 7)}
          </p>
          <p>Savoir Plus...</p>
        </figcaption>
      </figure>

      <figure>
        <Link to="/artists">
          <img
            src={`${import.meta.env.VITE_API_URL}${artwork[1].image_url}`}
            alt={artwork[1].title}
          />
        </Link>

        <figcaption>
          <h2>{artist[randomArtist].pseudo}</h2>
          <p>Savoir Plus...</p>
        </figcaption>
      </figure>

      <figure>
        <Link to="/artworks">
          <img
            src={`${import.meta.env.VITE_API_URL}${artwork[2].image_url}`}
            alt={artwork[2].title}
          />
        </Link>

        <figcaption>
          <h2>{artwork[randomArtwork].title}</h2>
          <p>Savoir Plus...</p>
        </figcaption>
      </figure>
    </div>
  );
}

CarouselHomepage.propTypes = {
  artwork: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  exhibition: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date_begin: PropTypes.string.isRequired,
      date_end: PropTypes.string.isRequired,
    })
  ).isRequired,
  artist: PropTypes.arrayOf(
    PropTypes.shape({
      pseudo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CarouselHomepage;
