import Navbar from "../components/Navbar";
import "../assets/styles/homepage.css";
import ArtworkComponent from "../components/ArtworkComponent";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="btn-carousel">
        <button type="button">Ouvres</button>
        <button type="button">Artistes</button>
        <button type="button">Expositions</button>
      </div>

      <div className="artwork_container">
        <ArtworkComponent />
      </div>
    </>
  );
}

export default Homepage;
