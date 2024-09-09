import { useLoaderData, Link } from "react-router-dom";
import ArtistComponent from "../components/ArtistComponent";
import Navbar from "../components/Navbar";
import "../assets/styles/artistlist.css";

function ArtistList() {
  const { artists } = useLoaderData();

  return (
    <>
      <Navbar />
      <h1>Nos artistes</h1>
      {artists.map((artist) => (
        <ArtistComponent artist={artist} key={artist.id} />
      ))}
      <Link to="/" className="homePage_navButtons">
        HomePage
      </Link>
    </>
  );
}

export default ArtistList;
