import PropTypes from "prop-types";

import "../assets/styles/homepage.css";

function CarouselHomepage({ carouselArtwork }) {
  console.info(carouselArtwork);

  return (
    <div className="horizontal_scroll_carousel">
      <figure>
        <img
          src={`${import.meta.env.VITE_API_URL}${carouselArtwork[0].image_url}`}
          alt={carouselArtwork[0].title}
        />
        <figcaption>
          <h2>{carouselArtwork[0].title}</h2>
          <p>Savoir Plus...</p>
        </figcaption>
      </figure>
      <figure>
        <img
          src={`${import.meta.env.VITE_API_URL}${carouselArtwork[1].image_url}`}
          alt={carouselArtwork[1].title}
        />
        <figcaption>
          <h2>{carouselArtwork[1].title}</h2>
          <p>Savoir Plus...</p>
        </figcaption>
      </figure>
      <figure>
        <img
          src={`${import.meta.env.VITE_API_URL}${carouselArtwork[2].image_url}`}
          alt={carouselArtwork[2].title}
        />
        <figcaption>
          <h2>{carouselArtwork[2].title}</h2>
          <p>Savoir Plus...</p>
        </figcaption>
      </figure>
    </div>
  );
}

CarouselHomepage.propTypes = {
  carouselArtwork: PropTypes.shape({
    title: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};

export default CarouselHomepage;
