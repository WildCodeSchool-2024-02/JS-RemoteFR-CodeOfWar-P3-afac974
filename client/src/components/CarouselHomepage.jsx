/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

import "../assets/styles/homepage.css";

function CarouselHomepage({ carouselArtwork, exhibition, artist }) {
  const artistLength = Object.keys(artist).length;

  const randomArtist = Math.ceil(Math.random() * artistLength - 1);
  console.info(randomArtist);

  return (
    <div className="horizontal_scroll_carousel">
      <figure>
        <img
          src={`${import.meta.env.VITE_API_URL}${carouselArtwork[0].image_url}`}
          alt={carouselArtwork[0].title}
        />

        <figcaption>
          <h2>{exhibition[0].name}</h2>
          <p>
            {exhibition[0].date_begin.substring(0, 7)} /{" "}
            {exhibition[0].date_end.substring(0, 7)}
          </p>
          <p>Savoir Plus...</p>
        </figcaption>
      </figure>

      <figure>
        <img
          src={`${import.meta.env.VITE_API_URL}${carouselArtwork[1].image_url}`}
          alt={carouselArtwork[1].title}
        />

        <figcaption>
          <h2>{artist[randomArtist].pseudo}</h2>
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
