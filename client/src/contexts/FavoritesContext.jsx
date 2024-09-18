import PropTypes from "prop-types";
import { createContext, useState, useContext, useMemo } from "react";

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

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

export default FavoritesContext;
export const useFavorites = () => useContext(FavoritesContext);
