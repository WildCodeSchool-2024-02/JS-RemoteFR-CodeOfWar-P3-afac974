import { useLoaderData, useNavigate } from "react-router-dom";
import "../assets/styles/homepage.css";
import Navbar from "../components/Navbar";
import ArtworkComponent from "../components/ArtworkComponent";

function Homepage() {
  const navigate = useNavigate();
  const goToArtworksPage = () => {
    navigate("/ArtworksPage");
  };
  const goToArtistsPage = () => {
    navigate("/ArtistsPage");
  };
  const goToExhibitionPage = () => {
    navigate("/ExhibitionPage");
  };

  const { artworks } = useLoaderData();
  return (
    <>
      <Navbar />
      <div className="homePage_nav">
        <button
          className="homePage_navButtons"
          type="button"
          onClick={goToArtworksPage}
        >
          Oeuvres
        </button>
        <button
          className="homePage_navButtons"
          type="button"
          onClick={goToArtistsPage}
        >
          Artistes
        </button>
        <button
          className="homePage_navButtons"
          type="button"
          onClick={goToExhibitionPage}
        >
          Expositions
        </button>
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
