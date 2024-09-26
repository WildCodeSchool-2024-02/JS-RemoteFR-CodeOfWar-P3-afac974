import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserId } from "../services/request";
import { useAuth } from "../context/AuthContext";

import IconsComponent from "./IconsComponent";

function Navbar() {
  const { auth } = useAuth();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      if (auth) {
        const id = await getUserId();
        setUserId(id);
      } else {
        setUserId(null);
      }
    };

    fetchUserId();
  }, [auth]);

  return (
    <nav className="navbarcomponent_navArea">
      <Link to="/" className="navBar_userButton">
        <IconsComponent
          className="navbarcomponent_logo_img"
          alt="VirtuArt logo"
          src="logo"
        />
      </Link>

      <ul className="navbarcomponent_list">
        {/* ------------------------------AUTHENTIFICATION/DASHBOARD----------------------------------- */}
        <li>
          <Link
            to={userId ? "/dashboard" : "/authentification"}
            className="navBar_userButton"
          >
            <IconsComponent
              className="navbarcomponent_user_icon"
              src={userId ? "userConnectedIcon" : "userIcon"}
            />
          </Link>
        </li>
        {/* ------------------------------FAVORIS----------------------------------- */}
        <li>
          {userId ? (
            <Link to={`/favoris/${userId}`}>
              <IconsComponent
                className="navbarcomponent_favorite_icon"
                alt="heart icon for favourites artworks"
                src="emptyHeart"
              />
            </Link>
          ) : (
            <Link to="/authentification">
              <IconsComponent
                className="navbarcomponent_favorite_icon"
                alt="heart icon for favorites artworks"
                src="emptyHeart"
              />
            </Link>
          )}
        </li>
        {/* ------------------------------MENU----------------------------------- */}
        <li>
          {" "}
          <Link to="/exhibitionForm">
            <IconsComponent
              className="navbarcomponent_menu_icon"
              src="menuburger"
            />{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
