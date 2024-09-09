import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../../components/Navbar";
import "../../assets/styles/authentification_styles/authpage.css";

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
            ⬅️ Retour
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
