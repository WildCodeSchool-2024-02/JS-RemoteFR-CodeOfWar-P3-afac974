import { useLoaderData, Link } from "react-router-dom";

import ArtworkComponent from "../components/ArtworkComponent";
import "../assets/styles/homepage.css";
import CarouselHomepage from "../components/CarouselHomepage";

function Homepage() {
  const { artworks } = useLoaderData();
  const { exhibitions } = useLoaderData();
  const { artists } = useLoaderData();
  console.info(artists);

  return (
    <>
      <div className="homePage_nav">
        <Link to="/artworks" className="homePage_navButtons">
          Oeuvres
        </Link>
        <Link to="/artists" className="homePage_navButtons">
          Artistes
        </Link>
        <Link to="/exhibition" className="homePage_navButtons">
          Expositions
        </Link>
      </div>
      <CarouselHomepage
        carouselArtwork={artworks}
        exhibition={exhibitions}
        artist={artists}
      />
      <h1 className="homePage_temporaryEvent">Evénnements temporaire</h1>
      <p className="homePage_temporaryEvent">Temporairement indisponible</p>
      <h2 className="homePage_discorverArtworks">
        Découvrez les oeuvres de nos artistes
      </h2>
      <div className="homePage_artwork_container">
        {artworks.map((artwork) => (
          <ArtworkComponent artwork={artwork} key={artwork.id} />
        ))}
      </div>
    </>
  );
}

export default Homepage;
