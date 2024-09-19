import PropTypes from "prop-types";
import { createContext, useState, useContext, useMemo, useEffect } from "react";
import { getFavorites } from "../services/request";

const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      setFavorite(await getFavorites());
    };
    loadFavorites();
  }, []);

  const memoFavorite = useMemo(
    () => ({ favorite, setFavorite }),
    [favorite, setFavorite]
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
