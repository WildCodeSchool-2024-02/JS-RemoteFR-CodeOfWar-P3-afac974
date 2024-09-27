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

  console.info(artist);

  return (
    <section className="carousel_section">
      <h1>Virtuart L'Art Pour Tous</h1>

      <div className="horizontal_scroll_carousel">
        <figure>
          <p>Explores nos expositions</p>
          <Link to="/exhibition">
            <img
              src={`${import.meta.env.VITE_API_URL}${artwork[randomArtwork].image_url}`}
              alt={artwork[randomArtwork].title}
            />

            <figcaption className="carrouselHomepage_informations">
              <h2 className="carrouselHomepage_title">
                {exhibition[randomExhibition].name}
              </h2>
              <p>
                {exhibition[randomExhibition].date_begin.substring(0, 7)} /{" "}
                {exhibition[randomExhibition].date_end.substring(0, 7)}
              </p>
              <p>{exhibition[randomExhibition].description}</p>
            </figcaption>
          </Link>
        </figure>

        <figure>
          <p>Decouvres nos artistes</p>
          <Link to="/artists">
            <img
              src={`${import.meta.env.VITE_API_URL}${artwork[1].image_url}`}
              alt={artwork[1].title}
            />

            <figcaption className="carrouselHomepage_informations">
              <h2 className="carrouselHomepage_title">
                {artist[randomArtist].pseudo}
              </h2>
              <p>{artist[randomArtist].biography}</p>
            </figcaption>
          </Link>
        </figure>

        <figure>
          <p>Admires les ouvres</p>
          <Link to="/artworks">
            <img
              src={`${import.meta.env.VITE_API_URL}${artwork[randomArtwork].image_url}`}
              alt={artwork[randomArtwork].title}
            />

            <figcaption className="carrouselHomepage_informations">
              <h2 className="carrouselHomepage_title">
                {artwork[randomArtwork].title}
              </h2>
              <p>{artwork[randomArtwork].description}</p>
            </figcaption>
          </Link>
        </figure>
      </div>
    </section>
  );
}

CarouselHomepage.propTypes = {
  artwork: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  exhibition: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date_begin: PropTypes.string.isRequired,
      date_end: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  artist: PropTypes.arrayOf(
    PropTypes.shape({
      pseudo: PropTypes.string.isRequired,
      biography: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CarouselHomepage;
