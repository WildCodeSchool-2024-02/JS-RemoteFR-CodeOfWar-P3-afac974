import userIcon from "../assets/images/user50px.png";
import heartIcon from "../assets/images/hear50px.png";
import menuBurger from "../assets/images/burger-bar50px.png";
import logo from "../assets/images/artlogo.png";

function Navbar() {
  return (
    <nav>
      <img className="logo_img" alt="futurArt logo" src={logo} />
      <ul className="nav_list">
        <li>
          <img className="user_icon" alt="user icon" src={userIcon} />
        </li>
        <li>
          <img
            className="favorite_icon"
            alt="heart icon for favourites artworks"
            src={heartIcon}
          />
        </li>
        <li>
          <img className="menu_icon" alt="burger menu icon" src={menuBurger} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
