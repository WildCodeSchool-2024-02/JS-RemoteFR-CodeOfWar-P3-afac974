import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import BackButtonComponent from "../../components/authentification_components/BackButtonComponent";

function AuthPage() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/dashboard");
    }
  }, [auth, navigate]);

  return (
    <div className="App_sizePage">
      <h1 className="auth_welcome">
        Bienvenue{auth ? ` ${auth.user.pseudo}` : ""}
      </h1>
      <p className="auth_tagline">L'art en ligne, pour tous, partout.</p>
      <ul>
        {auth == null ? (
          <>
            <li className="auth_navOffline">
              <Link to="/login" className="auth_navLinksOffline">
                Connexion
              </Link>
            </li>
            <li className="auth_navOffline">
              <Link to="/register" className="auth_navLinksOffline">
                Inscription
              </Link>
            </li>
          </>
        ) : null}
      </ul>
      <li className="auth_nav">
        <BackButtonComponent to="/" />
      </li>
      <div className="footerSpace" />
    </div>
  );
}

export default AuthPage;
