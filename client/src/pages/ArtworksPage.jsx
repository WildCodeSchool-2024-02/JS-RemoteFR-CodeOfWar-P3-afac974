import { Link, useLoaderData } from "react-router-dom";
import ArtworkComponent from "../components/ArtworkComponent";
import "../assets/styles/homepage.css";

function ArtworksPage() {
  const { artworks } = useLoaderData();
  console.info(artworks);
  return (
    <div>
      <h1>ArtworksPage</h1>
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
