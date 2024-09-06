import { Link } from "react-router-dom";

function ArtistsPage() {
  return (
    <div>
      <h1>ArtistsPage</h1>
      <Link to="/" className="homePage_navButtons">
        HomePage
      </Link>
    </div>
  );
}

export default ArtistsPage;
