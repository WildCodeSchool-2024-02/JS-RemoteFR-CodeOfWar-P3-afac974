import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CarouselHomepage({ artwork, exhibition, user }) {
  const userLength = user.length;
  const artworkLength = artwork.length;
  const exhibitionLength = exhibition.length;

  if (!userLength || !artworkLength || !exhibitionLength) {
    return <p>Contenu non disponible pour le moment.</p>;
  }

  const randomUser = Math.max(0, Math.floor(Math.random() * userLength));
  const randomArtwork = Math.max(0, Math.floor(Math.random() * artworkLength));
  const randomExhibition = Math.max(
    0,
    Math.floor(Math.random() * exhibitionLength)
  );

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
              <p className="carrouselHomepage_content">
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
          <p>Admires les ouvres</p>
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
