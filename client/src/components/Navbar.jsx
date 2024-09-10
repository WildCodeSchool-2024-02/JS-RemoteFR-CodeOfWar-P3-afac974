import { Link } from "react-router-dom";

import userIcon from "../assets/icons/user.svg";
import heartIcon from "../assets/images/hear50px.png";
import menuBurger from "../assets/images/burger-bar50px.png";
import logo from "../assets/images/VirtuArtLogo.svg";

function Navbar() {
  return (
    <nav className="navbarcomponent_navArea">
      <img
        className="navbarcomponent_logo_img"
        alt="VirtuArt logo"
        src={logo}
      />
      <ul className="navbarcomponent_list">
        <li>
          <Link to="/authentification" className="navBar_userButton">
            <img
              className="navbarcomponent_user_icon"
              alt="user icon"
              src={userIcon}
            />
          </Link>
        </li>
        <li>
          <img
            className="navbarcomponent_favorite_icon"
            alt="heart icon for favourites artworks"
            src={heartIcon}
          />
        </li>
        <li>
          <img
            className="navbarcomponent_menu_icon"
            alt="burger menu icon"
            src={menuBurger}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
