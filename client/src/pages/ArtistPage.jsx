import { useLoaderData, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function ArtistPage() {
  const { artist, artwork } = useLoaderData();
  return (
    <>
      <Navbar />
      <h1>{artist.pseudo}</h1>
      <h2>{artist.biography}</h2>
      <p>{artist.birthday}</p>
      <p>{artist.deathday}</p>
      <p>{artist.nationality}</p>
      <p>Les oeuvres de l'artiste:</p>
      <img
        className="artworkPage_artworklist"
        src={`${import.meta.env.VITE_API_URL}${artwork.image_url}`}
        alt={artwork.title}
      />
      <Link to="/" className="homePage_navButtons">
        HomePage
      </Link>
    </>
  );
}

export default ArtistPage;
