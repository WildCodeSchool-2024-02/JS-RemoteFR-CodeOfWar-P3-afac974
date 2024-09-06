import { useLoaderData, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../assets/styles/homepage.css";
import ArtworkComponent from "../components/ArtworkComponent";

function Homepage() {
  const { artworks } = useLoaderData();
  return (
    <>
      <Navbar />
      <div className="homePage_nav">
        <Link to="/artworksPage" className="homePage_navButtons">
          Oeuvres
        </Link>
        <Link to="/artistsPage" className="homePage_navButtons">
          Artistes
        </Link>
        <Link to="/exhibitionPage" className="homePage_navButtons">
          Expositions
        </Link>
      </div>

      <div className="homePage_artwork_container">
        {artworks.map((artwork) => (
          <ArtworkComponent artwork={artwork} key={artwork.id} />
        ))}
      </div>
    </>
  );
}

export default Homepage;
