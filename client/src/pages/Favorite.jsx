import { Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";
import FavoritesComponent from "../components/exhibitionForm/FavoritesComponent";

import "../assets/styles/favorites.css";

function Favorite() {
  const { favorite, setFavorite } = useFavorites();
  // console.info(favorite);

  return (
    <>
      <section className="favorites_artworks">
        <h3>Mes favoris</h3>
        <div>
          {favorite.map((fav, index) => (
            <FavoritesComponent
              tools={{ fav, index, favorite, setFavorite }}
              key={fav.artwork_id}
            />
          ))}

          {/* {favorite.length > 0 ? (
            ""
          ) : (
            <p>Vous n'avez pas d'oeuvres dans les Favoris.</p>
          )} */}
        </div>
      </section>

      <Link to="/" className="homePage_navButtons">
        HomePage
      </Link>
    </>
  );
}
export default Favorite;
