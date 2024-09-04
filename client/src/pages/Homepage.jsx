import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../assets/styles/homepage.css";
import ArtworkComponent from "../components/ArtworkComponent";

function Homepage() {
  const { artworks } = useLoaderData();
  return (
    <>
      <Navbar />
      <div className="btn-carousel">
        <button type="button">Ouvres</button>
        <button type="button">Artistes</button>
        <button type="button">Expositions</button>
      </div>

      <div className="artwork_container">
        {artworks.map((artwork) => (
          <ArtworkComponent artwork={artwork} key={artwork.id} />
        ))}
      </div>
    </>
  );
}

export default Homepage;
