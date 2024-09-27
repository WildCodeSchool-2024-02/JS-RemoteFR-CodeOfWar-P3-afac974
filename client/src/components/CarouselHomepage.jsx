import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../assets/styles/homepage.css";

function CarouselHomepage({ artwork, exhibition }) {
  const artworkLength = artwork.length;
  const exhibitionLength = exhibition.length;

  // const randomArtist = Math.ceil(Math.random() * artistLength - 1);
  const randomArtwork = Math.ceil(Math.random() * artworkLength - 1);
  const randomExhibition = Math.ceil(Math.random() * exhibitionLength - 1);
  const randomArtworkArtist = Math.ceil(Math.random() * artworkLength - 1);

  return (
    <section className="carousel_section">
      <h1>Virtuart L'Art Pour Tous</h1>

      <div className="horizontal_scroll_carousel">
        <figure>
          <p>Tous nos expositions</p>
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
              <h2 className="carrouselHomepage_title">Tous Nos Artiste</h2>
            </figcaption>
          </Link>
        </figure>

        <figure>
          <p>Admires les ouvres</p>
          <Link to="/artworks">
            <img
              src={`${import.meta.env.VITE_API_URL}${artwork[randomArtworkArtist].image_url}`}
              alt={artwork[randomArtworkArtist].title}
            />

            <figcaption className="carrouselHomepage_informations">
              <h2 className="carrouselHomepage_title">Tous nos ouvres</h2>
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
};

export default CarouselHomepage;
