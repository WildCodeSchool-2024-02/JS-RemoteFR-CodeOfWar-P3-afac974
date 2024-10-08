import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useFavorites } from "../contexts/FavoritesContext";
import { getUserId } from "../services/request";

function Popover({ onClose }) {
  return (
    <div className="favorite_popover">
      <p>
        Vous n'êtes pas connecté. Souhaitez-vous être redirigé vers la page de
        connexion ?
      </p>
      <div className="favorite_popover_buttons">
        <Link to="/authentification">
          <button type="button">Oui</button>
        </Link>
        <button type="button" onClick={onClose}>
          Non
        </button>
      </div>
    </div>
  );
}

function ArtworkPage() {
  const { artwork } = useLoaderData();
  const { favorite, addNewFavorite, removeFavorite } = useFavorites();
  const [isFavorite, setIsFavorite] = useState();
  const [userId, setUserId] = useState();
  const [showPopover, setShowPopover] = useState(false);

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

  const handleUnconnectedFavoriteClick = () => {
    setShowPopover(true);
  };

  return (
    <>
      <div className={showPopover ? "artworkPage_blur_wrapper" : ""}>
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
            <button type="button" onClick={handleUnconnectedFavoriteClick}>
              🤍
            </button>
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
      </div>

      {showPopover && <Popover onClose={() => setShowPopover(false)} />}
    </>
  );
}

export default ArtworkPage;

Popover.propTypes = {
  onClose: PropTypes.func.isRequired,
};
