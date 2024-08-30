import { FaUserCircle } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/images/artlogo.png";

function Navbar() {
  return (
    <nav className="logo_nav">
      <img className="logo_img" alt="futurArt logo" src={logo} />
      <ul className="nav_list">
        <li>
          <FaUserCircle className="user_icon" />
        </li>
        <li>
          <GrFavorite className="favorite_icon" />
        </li>
        <li>
          <GiHamburgerMenu className="menu_icon" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
