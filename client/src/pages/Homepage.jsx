import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../assets/styles/homepage.css";
import ArtworkComponent from "../components/ArtworkComponent";

function Homepage() {
  const { artworks } = useLoaderData();
  return (
    <>
      <Navbar />
      <div className="homePage_nav">
        <button className="homePage_navButtons" type="button">
          Oeuvres
        </button>
        <button className="homePage_navButtons" type="button">
          Artistes
        </button>
        <button className="homePage_navButtons" type="button">
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
