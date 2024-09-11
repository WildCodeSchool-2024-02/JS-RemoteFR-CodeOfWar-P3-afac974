import { Link } from "react-router-dom";
import IconsComponent from "./IconsComponent";

function Navbar() {
  return (
    <nav className="navbarcomponent_navArea">
      <IconsComponent
        className="navbarcomponent_logo_img"
        alt="VirtuArt logo"
        src="logo"
      />
      <ul className="navbarcomponent_list">
        <li>
          <Link to="/authentification" className="navBar_userButton">
            <IconsComponent
              className="navbarcomponent_user_icon"
              alt="user icon"
              src="user"
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
            src="menu-burger"
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
