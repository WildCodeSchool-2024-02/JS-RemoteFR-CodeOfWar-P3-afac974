import { useLoaderData, Link } from "react-router-dom";

function ArtistPage() {
  const { user, artworksbyuser } = useLoaderData();

  return (
    <>
      <h1 className="artistPage_name">{user.pseudo}</h1>
      <p className="artistPage_nationality">Nationnalité: {user.nationality}</p>
      <p className="artistPage_biography">Biographie:</p>
      <h2 className="artistPage_biography">{user.biography}</h2>
      <p className="artistPage_birthday">{user.birthday}</p>
      <p className="artistPage_deathday">{user.deathday}</p>

      <p className="artistPage_text">Les œuvres de l'artiste :</p>
      <div className="artistPage_artworksByArtistContainer">
        {artworksbyuser.map((artwork) => (
          <div key={artwork.id}>
            <Link to={`/artwork/${artwork.id}`}>
              <img
                className="artistPage_artworkslist"
                src={`${import.meta.env.VITE_API_URL}${artwork.image_url}`}
                alt={artwork.title}
              />
            </Link>
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
