import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserId } from "../services/request";
import { useAuth } from "../contexts/AuthContext";

import IconsComponent from "./IconsComponent";

function Navbar() {
  const { auth } = useAuth();
  const [userData, setUserData] = useState({ id: null, isAdmin: false });

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth) {
        const data = await getUserId();
        setUserData({ id: data, isAdmin: auth.user.is_admin });
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
        {/* ------------------------------AUTHENTIFICATION/DASHBOARD----------------------------------- */}
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
        {/* ------------------------------FAVORIS----------------------------------- */}
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
        {/* ------------------------------MENU----------------------------------- */}
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
                onClick={handleShowLinks}
              >
                <li className="navBarComponent_1"> Tous les artistes</li>
              </Link>
              <Link
                to="/artworks"
                className="navBarComponent_navLinks"
                onClick={handleShowLinks}
              >
                <li className="navBarComponent_2"> Toutes les oeuvres</li>
              </Link>
              <Link
                to="/exhibition"
                className="navBarComponent_navLinks "
                onClick={handleShowLinks}
              >
                <li className="navBarComponent_3">Les expositions</li>
              </Link>
              {userData.isAdmin ? (
                <Link
                  to="/exhibitionForm"
                  onClick={handleShowLinks}
                  className="navBarComponent_navLinks"
                >
                  <li className="navBarComponent_5">Gestion des expos ADMIN</li>
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
