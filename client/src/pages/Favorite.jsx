import { useLoaderData } from "react-router-dom";
import FavoriteComponent from "../components/FavoriteComponent";

function Favorite() {
  const { favorites } = useLoaderData();

  return (
    <>
      <h3 className="favorite_title">Mes oeuvres favorites</h3>
      <section className="favorite_cards">
        {favorites.length > 0 ? (
          favorites.map((fav) => (
            <FavoriteComponent fav={fav} key={fav.artwork_id} />
          ))
        ) : (
          <p>Vous n'avez pas d'oeuvres dans les Favoris.</p>
        )}
      </section>
      <div className="footerSpace" />
    </>
  );
}
export default Favorite;
