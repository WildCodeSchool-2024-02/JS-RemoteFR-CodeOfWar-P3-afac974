import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserId } from "../services/request";
import { useAuth } from "../context/AuthContext";
import IconsComponent from "./IconsComponent";

function Navbar() {
  const { auth } = useAuth();
  const [userData, setUserData] = useState({ id: null, isAdmin: false });

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth) {
        const data = await getUserId();
        setUserData({ id: data.id, isAdmin: data.is_admin });
      } else {
        setUserData({ id: null, isAdmin: false });
      }
    };

    fetchUserData();
  }, [auth]);

  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

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
        {/* ---------------------------Authentification/Dashboard--------------------------- */}
        <li>
          <Link
            to={userData.id ? "/dashboard" : "/authentification"}
            className="navBar_userButton"
          >
            <IconsComponent
              className="navbarcomponent_user_icon"
              src={userData.id ? "userConnectedIcon" : "userIcon"}
            />
          </Link>
        </li>
        {/* ---------------------------Favoris--------------------------- */}
        <li>
          {userData.id ? (
            <Link to={`/favoris/${userData.id}`}>
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
        {/* ---------------------------Menu---------------------------------- */}
        <div className="navbarcomponent_burgerMenu">
          <nav
            className={`navBarComponent_navContainer ${showLinks ? "show-nav" : "hide-nav"}`}
          >
            <div className="navBarComponent_listLinks">
              <button
                className="navBarComponent_menuButton"
                type="button"
                aria-label="MenuBurger"
                onClick={handleShowLinks}
              >
                <span className="navBarComponent_burgerBars" />
              </button>
              <Link
                to="/artists"
                className="navBarComponent_navLinks"
                onClick={showLinks}
              >
                <li className="navBarComponent_1"> Tous les artistes</li>
              </Link>
              <Link
                to="/artworks"
                className="navBarComponent_navLinks"
                onClick={showLinks}
              >
                <li className="navBarComponent_2"> Toutes les oeuvres</li>
              </Link>
              <Link
                to="/exhibition"
                className="navBarComponent_navLinks "
                onClick={showLinks}
              >
                <li className="navBarComponent_3">
                  Les expositions temporaire
                </li>
              </Link>
              <Link
                to="/exhibition"
                className="navBarComponent_navLinks"
                onClick={showLinks}
              >
                <li className="navBarComponent_4">
                  Les expositions permanente
                </li>
              </Link>
              <Link
                to="/"
                className="navBarComponent_navLinks"
                onClick={showLinks}
              >
                <li className="navBarComponent_5"> A propos de nous</li>
              </Link>

              {userData.isAdmin ? (
                <Link
                  to="/exhibitionForm"
                  onClick={showLinks}
                  className="navBarComponent_navLinks"
                >
                  <li className="navBarComponent_6">Formulaire exposition</li>
                </Link>
              ) : (
                ""
              )}
            </div>
          </nav>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
