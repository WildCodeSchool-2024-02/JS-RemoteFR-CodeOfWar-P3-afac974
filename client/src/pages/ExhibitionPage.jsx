import { Link } from "react-router-dom";

function ExhibitionPage() {
  return (
    <div>
      <h1>ExhibitionPage</h1>
      <Link to="/" className="homePage_navButtons">
        HomePage
      </Link>
    </div>
  );
}

export default ExhibitionPage;
