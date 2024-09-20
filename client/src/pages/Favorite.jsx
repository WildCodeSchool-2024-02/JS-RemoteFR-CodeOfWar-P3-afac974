import { Link, useLoaderData } from "react-router-dom";
import FavoritesComponent from "../components/exhibitionForm/FavoritesComponent";

import "../assets/styles/favorites.css";

function Favorite() {
  const { favorites } = useLoaderData();

  return (
    <>
      <section className="favorites_artworks">
        <h3>Mes favoris</h3>
        <div>
          {favorites.length > 0 ? (
            favorites.map((fav) => (
              <FavoritesComponent fav={fav} key={fav.artwork_id} />
            ))
          ) : (
            <p>Vous n'avez pas d'oeuvres dans les Favoris.</p>
          )}
        </div>
      </section>

      <Link to="/" className="homePage_navButtons">
        HomePage
      </Link>
    </>
  );
}
export default Favorite;
