import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";
import { getUserId } from "../services/request";

function ArtworkPage() {
  const { artwork } = useLoaderData();
  const { favorite, addNewFavorite, removeFavorite } = useFavorites();
  const [isFavorite, setIsFavorite] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    const fetchUserId = async () => {
      setUserId(await getUserId());
    };
    fetchUserId();

    if (favorite) {
      setIsFavorite(
        favorite.some((favArtwork) => favArtwork.artwork_id === artwork.id)
      );
    }
  }, [favorite, artwork.id]);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(artwork.id, userId);
      setIsFavorite(!isFavorite);
    } else {
      addNewFavorite(artwork.id, userId);
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <>
      <div className="artworkPage_oneOeuvre">
        <img
          className="artworkPage_oneOeuvrePic"
          src={`${import.meta.env.VITE_API_URL}${artwork.image_url}`}
          alt={artwork.title}
        />
      </div>

      <div className="artworkPage_nameOeuvre">
        <Link
          to={`/artistpage/${artwork.user_id}`}
          className="artworkPage_goToartistpage"
        >
          <p>{artwork.user_name}</p>
        </Link>
        <p>{artwork.title}</p>
        <p>{artwork.formatedDate}</p>
      </div>

      <div className="artworkPage_fav_com">
        <p>Un coup de coeur ? Ajouter la à vos favoris</p>

        {userId ? (
          <button
            className="like_button"
            type="button"
            onClick={toggleFavorite}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        ) : (
          <Link to="/authentification">
            <button type="button">🤍</button>
          </Link>
        )}
      </div>

      <div className="artworkPage_tech_oeuvre">
        <p>A propos de l'oeuvre</p>
        <ul className="artworkPage_diversTech">
          <li>
            <span>Technique :</span> non renseigné
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
