import { Link } from "react-router-dom";

import IconsComponent from "./IconsComponent";

function Navbar() {
  return (
    <nav className="navbarcomponent_navArea">
      <Link to="/">
        <IconsComponent
          className="navbarcomponent_logo_img"
          alt="VirtuArt logo"
          src="logo"
        />
      </Link>
      <ul className="navbarcomponent_list">
        <li>
          <Link to="/authentification">
            <IconsComponent
              className="navbarcomponent_user_icon"
              alt="user icon"
              src="userIcon"
            />
          </Link>
        </li>
        <li>
          <IconsComponent
            className="navbarcomponent_favorite_icon"
            alt="heart icon for favourites artworks"
            src="emptyHeart"
          />
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
