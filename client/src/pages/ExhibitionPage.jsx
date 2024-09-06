import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function ExhibitionPage() {
  return (
    <div>
      <Navbar />
      <h1>ExhibitionPage</h1>
      <Link to="/" className="homePage_navButtons">
        HomePage
      </Link>
    </div>
  );
}

export default ExhibitionPage;
