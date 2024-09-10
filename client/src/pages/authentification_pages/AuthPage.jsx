import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import leftArrow from "../../assets/icons/chevron-left-arrow.svg";
import lock from "../../assets/icons/lock.svg";

function AuthPage() {
  const { auth, setAuth } = useAuth();
  const [showPopover, setShowPopover] = useState(false);
  const [popoverMessage, setPopoverMessage] = useState("");
  useEffect(() => {
    if (showPopover) {
      const timer = setTimeout(() => setShowPopover(false), 2000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [showPopover]);
  const handleDisconnected = () => {
    setAuth(null);
    setPopoverMessage("Déconnexion réussie !");
    setShowPopover(true);
  };

  return (
    <>
      {showPopover && (
        <div className="auth_popoverDisconnect">
          <div className="auth_popoverDisconnected">
            <img src={lock} alt="Déconnexion" />
            {popoverMessage}
          </div>
        </div>
      )}
      <h1 className="auth_welcome">
        Bienvenue{auth ? ` ${auth.user.name}` : ""}
      </h1>
      <p className="auth_tagline">L'art en ligne, pour tous, partout.</p>
      <ul>
        {auth == null ? (
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
        ) : null}
      </ul>
      {auth && (
        <li className="auth_nav">
          <button
            className="auth_disconnect"
            type="button"
            onClick={handleDisconnected}
          >
            Déconnexion
          </button>
        </li>
      )}
      <li className="auth_nav">
        <Link to="/" className="auth_backHome">
          <img
            className="auth_backButtonIcon"
            src={leftArrow}
            alt="Flèche gauche"
          />
          <span className="auth_backButtonText">Précédent</span>
        </Link>
      </li>
      <main>
        <Outlet context={{ auth, setAuth }} />
      </main>
    </>
  );
}

export default AuthPage;
