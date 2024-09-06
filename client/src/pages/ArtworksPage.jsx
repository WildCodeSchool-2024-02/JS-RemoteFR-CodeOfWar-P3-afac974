import { Link } from "react-router-dom";

function ArtworksPage() {
  return (
    <div>
      <h1>ArtworksPage</h1>
      <Link to="/" className="homePage_navButtons">
        HomePage
      </Link>
    </div>
  );
}

export default ArtworksPage;
