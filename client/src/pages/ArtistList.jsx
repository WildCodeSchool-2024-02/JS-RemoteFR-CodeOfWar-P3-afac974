import { useLoaderData } from "react-router-dom";

import "../assets/styles/artistlist.css";

function ArtistList() {
  const { artists } = useLoaderData();

  return (
    <>
      <h1>Nos artistes</h1>

      {artists.map((artist) => (
        <ul key={artist.id}>
          <li>
            {artist.firstname} {artist.lastname}
          </li>
          <li>Nationalité : {artist.nationality}</li>
          <li>Biographie : {artist.biography}</li>
        </ul>
      ))}
    </>
  );
}

export default ArtistList;
