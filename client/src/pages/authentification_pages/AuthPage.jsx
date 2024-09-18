import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import IconsComponent from "../../components/IconsComponent";
import BackButtonComponent from "../../components/authentification_components/BackButtonComponent";

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
    <div className="App_sizePage">
      {showPopover && (
        <div className="auth_popoverDisconnect">
          <div className="auth_popoverDisconnected">
            <IconsComponent src="lock" alt="Déconnexion" />
            {popoverMessage}
          </div>
        </div>
      )}
      <h1 className="auth_welcome">
        Bienvenue{auth ? ` ${auth.user.pseudo}` : ""}
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
        <BackButtonComponent to="/" />
      </li>
    </div>
  );
}

export default AuthPage;
