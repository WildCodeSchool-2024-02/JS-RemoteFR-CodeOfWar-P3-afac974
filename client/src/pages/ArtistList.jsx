import { useLoaderData, Link } from "react-router-dom";
import ArtistComponent from "../components/ArtistComponent";

function ArtistList() {
  const { artists } = useLoaderData();

  return (
    <>
      <h1 className="artistlist_name">Nos artistes</h1>
      <div className="artistlist_container">
        {artists.map((artist) => (
          <ArtistComponent artist={artist} key={artist.id} />
        ))}
      </div>
      <Link to="/" className="homePage_navButtons">
        HomePage
      </Link>
    </>
  );
}

export default ArtistList;
