import { useLoaderData, Link } from "react-router-dom";

function ArtistPage() {
  const { user, artworksbyuser } = useLoaderData();

  return (
    <div className="artistPage">
      <div className="artistPage_details">
        <h1 className="artistPage_name">{user.pseudo}</h1>
        <p className="artistPage_nationality">
          Nationnalité: {user.nationality}
        </p>
        <h2 className="artistPage_biography">Biographie:</h2>
        <p className="artistPage_biography">{user.biography}</p>
        <h2 className="artistPage_artworkTitle">Les œuvres de l'artiste :</h2>
      </div>
      <div className="artistPage_contentArtworks">
        {artworksbyuser.map((artwork) => (
          <div key={artwork.id}>
            <Link to={`/artwork/${artwork.id}`}>
              <div className="artistPage_artworksByArtistContainer">
                <img
                  className="artistPage_artworkslist"
                  src={`${import.meta.env.VITE_API_URL}${artwork.image_url}`}
                  alt={artwork.title}
                />
              </div>
            </Link>
            <p>{artwork.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistPage;
