import { useLoaderData, Link } from "react-router-dom";

import ArtworkComponent from "../components/ArtworkComponent";
import "../assets/styles/homepage.css";

function Homepage() {
  const { artworks } = useLoaderData();
  return (
    <>
      <div className="homePage_nav">
        <Link to="/artworksPage" className="homePage_navButtons">
          Oeuvres
        </Link>
        <Link to="/artists" className="homePage_navButtons">
          Artistes
        </Link>
        <Link to="/exhibitionPage" className="homePage_navButtons">
          Expositions
        </Link>
      </div>
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
