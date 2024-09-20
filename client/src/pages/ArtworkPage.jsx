import { useLoaderData, Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";

function ArtworkPage() {
  const { artwork } = useLoaderData();
  const { favorite, addNewFavorite, removeFavorite } = useFavorites();

  console.info(artwork.id);

  // ID à changer dès que l'ID du user est dynamique
  const userId = 1;

  const isFavorite = favorite.some(
    (favArtwork) => favArtwork.artwork_id === artwork.id
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(artwork.id, userId);
    } else {
      addNewFavorite(artwork.id, userId);
    }
  };

  return (
    <>
      <div className="artworkPage_pagePosition">
        <img
          className="artworkPage_logoPagePosition"
          src={`${import.meta.env.VITE_API_URL}/assets/images/logo_house.png`}
          alt="logo_house"
        />
        <h1 className="artworkPage_namePagePosition">
          {" "}
          {"> Les oeuvres > Nom de l'oeuvre"}
        </h1>
      </div>

      <div className="artworkPage_tag">
        <p>Tags :</p>
        <ul className="artworkPage_tags">
          <li>tag 1</li>
          <li>tag 2</li>
          <li>tag 3</li>
        </ul>
      </div>
      <div className="artworkPage_oneOeuvre">
        <img
          className="artworkPage_oneOeuvrePic"
          src={`${import.meta.env.VITE_API_URL}${artwork.image_url}`}
          alt={artwork.title}
        />
      </div>

      <div className="artworkPage_nameOeuvre">
        <Link
          to={`/artistpage/${artwork.artist_id}`}
          className="artworkPage_goToartistpage"
        >
          <p>{artwork.artist_name}</p>
        </Link>
        <p>{artwork.title}</p>
        <p>{artwork.date}</p>
      </div>

      <div className="artworkPage_fav_com">
        <p>Un coup de coeur ? Ajouter la à vos favoris</p>
        <button className="like_button" type="button" onClick={toggleFavorite}>
          {isFavorite ? "❤️" : "🤍"}
        </button>
        <p>Une pensée ? Faites la vivre en commentaire</p>
      </div>

      <div className="artworkPage_tech_oeuvre">
        <p>A propos de l'oeuvre</p>
        <ul className="artworkPage_diversTech">
          <li>
            <span>Technique :</span> non renseigné
          </li>
          <li>
            <span>Dimensions :</span> non renseigné
          </li>
          <li>
            <span>Description :</span> {artwork.description}
          </li>
        </ul>
        <Link to="/" className="homePage_navButtons">
          HomePage
        </Link>
      </div>
    </>
  );
}

export default ArtworkPage;
