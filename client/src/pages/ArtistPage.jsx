import { useLoaderData, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../assets/styles/artistprofile.css";

function ArtistPage() {
  const { artist, artworksbyartist } = useLoaderData(); // Récupérer l'artiste et les œuvres associées

  return (
    <>
      <Navbar />
      <h1>{artist.pseudo}</h1>
      <h2>{artist.biography}</h2>
      <p>{artist.birthday}</p>
      <p>{artist.deathday}</p>
      <p>{artist.nationality}</p>

      <p>Les œuvres de l'artiste :</p>
      <div className="artworkPage_artworklist">
        {artworksbyartist.map((artwork) => (
          <div key={artwork.id}>
            <img
              src={`${import.meta.env.VITE_API_URL}${artwork.image_url}`}
              alt={artwork.title}
            />
            <p>{artwork.title}</p>
          </div>
        ))}
      </div>

      <Link to="/" className="homePage_navButtons">
        HomePage
      </Link>
    </>
  );
}

export default ArtistPage;
