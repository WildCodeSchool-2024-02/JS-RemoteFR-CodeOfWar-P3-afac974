import PropTypes from "prop-types";
import { createContext, useState, useContext, useMemo } from "react";
import { getFavorites, addFavorite, deleteFavorite } from "../services/request";

const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  const addNewFavorite = async (artworkId, userId) => {
    await addFavorite(artworkId, userId);
    setFavorite(await getFavorites(userId));
  };

  const removeFavorite = async (artworkId, userId) => {
    await deleteFavorite(artworkId, userId);
    setFavorite(await getFavorites(userId));
  };

  const memoFavorite = useMemo(
    () => ({ favorite, addNewFavorite, removeFavorite }),
    [favorite]
  );

  return (
    <FavoritesContext.Provider value={memoFavorite}>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useFavorites = () => useContext(FavoritesContext);
