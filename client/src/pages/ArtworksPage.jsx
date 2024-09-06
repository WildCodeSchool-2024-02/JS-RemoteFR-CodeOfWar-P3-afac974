import { useLoaderData, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ArtworkComponent from "../components/ArtworkComponent";
import "../assets/styles/homepage.css";

function ArtworksPage() {
  const { artworks } = useLoaderData();
  return (
    <div>
      <Navbar />
      <h1>Toutes les Oeuvres</h1>
      <div className="homePage_artwork_container">
        {artworks.map((artwork) => (
          <ArtworkComponent artwork={artwork} key={artwork.id} />
        ))}
      </div>
      <Link to="/" className="homePage_navButtons">
        HomePage
      </Link>
    </div>
  );
}

export default ArtworksPage;
