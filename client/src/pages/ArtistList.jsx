import { useLoaderData } from "react-router-dom";
import ArtistComponent from "../components/ArtistComponent";

import "../assets/styles/artistlist.css";

function ArtistList() {
  const { artists } = useLoaderData();

  return (
    <>
      <h1>Nos artistes</h1>
      {artists.map((artist) => (
        <ArtistComponent artist={artist} key={artist.id} />
      ))}
    </>
  );
}

export default ArtistList;
