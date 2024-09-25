import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IconsComponent from "./IconsComponent";
import { getUserId } from "../services/request";

function Navbar() {
  const [userId, setUserId] = useState();

  useEffect(() => {
    const fetchUserId = async () => {
      setUserId(await getUserId());
    };
    fetchUserId();
  }, []);

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
        <li>
          <Link to="/authentification" className="navBar_userButton">
            <IconsComponent
              className="navbarcomponent_user_icon"
              alt="user icon"
              src="userIcon"
            />
          </Link>
        </li>
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

        <li>
          <IconsComponent
            className="navbarcomponent_menu_icon"
            alt="burger menu icon"
            src="menuburger"
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
