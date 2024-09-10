import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../../components/Navbar";
import "../../assets/styles/authentification_styles/authpage.css";

import leftArrow from "../../assets/icons/chevron-left-arrow.svg";

function AuthPage() {
  const [user, setUser] = useState();
  return (
    <>
      <Navbar />
      <h1 className="auth_welcome">Bienvenue</h1>
      <p className="auth_tagline">L'art en ligne, pour tous, partout.</p>
      <ul>
        {user == null ? (
          <>
            <li className="auth_nav">
              <Link to="/login" className="auth_navLinks">
                Connexion
              </Link>
            </li>
            <li className="auth_nav">
              <Link to="/register" className="auth_navLinks">
                Inscription
              </Link>
            </li>
          </>
        ) : (
          <li className="auth_nav">
            <button
              className="auth_disconnect"
              type="button"
              onClick={() => {
                setUser(null);
              }}
            >
              Déconnexion
            </button>
          </li>
        )}
        <li className="auth_nav">
          <Link to="/" className="auth_backHome">
            {" "}
            <img
              className="auth_backButtonIcon"
              src={leftArrow}
              alt="Flèche gauche"
            />
            <span className="auth_backButtonText">Précédent</span>
          </Link>
        </li>
      </ul>
      {user && <p>Bienvenue {user.name}</p>}
      <main>
        <Outlet context={{ user, setUser }} />
      </main>
    </>
  );
}

export default AuthPage;
