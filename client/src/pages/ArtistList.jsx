import { useLoaderData } from "react-router-dom";

function ArtistList() {
  const { artists } = useLoaderData();

  return (
    <>
      <h1>Liste des Artistes</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.firstname}</li>
        ))}
      </ul>
    </>
  );
}

export default ArtistList;
