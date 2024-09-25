import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import BackButtonComponent from "../../components/authentification_components/BackButtonComponent";
import DashboardPage from "../user_connected_pages/DashboardPage";

function AuthPage() {
  const { auth } = useAuth();
  if (auth) {
    return <Navigate to="/dashboard" />;
  }

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
      {auth && <DashboardPage />}
      <li className="auth_nav">
        <BackButtonComponent to="/" />
      </li>
    </div>
  );
}

export default AuthPage;
