import { useLoaderData, Link } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// import BackButtonComponent from "../../components/authentification_components/BackButtonComponent";

function MyProfil() {
  //   const { auth, updateUser } = useAuth();

  const { artist, artworksbyartist } = useLoaderData();

  return (
    <>
      <h1 className="artistPage_name">{artist.pseudo}</h1>
      <p className="artistPage_nationality">
        Nationnalité: {artist.nationality}
      </p>
      <p className="artistPage_biography">Biographie:</p>
      <h2 className="artistPage_biography">Biographie: {artist.biography}</h2>
      <p className="artistPage_birthday">{artist.birthday}</p>
      <p className="artistPage_deathday">{artist.deathday}</p>

      <p className="artistPage_text">Les œuvres de l'artiste :</p>
      <div className="artistPage_artworksByArtistContainer">
        {artworksbyartist.map((artwork) => (
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

export default MyProfil;
