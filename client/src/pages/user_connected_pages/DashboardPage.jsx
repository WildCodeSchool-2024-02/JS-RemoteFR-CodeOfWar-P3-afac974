import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import IconsComponent from "../../components/IconsComponent";

function DashboardPage() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleDisconnected = () => {
    setAuth(null);
    navigate("/authentification");
  };

  return (
    <div className="auth_navlist">
      <li className="auth_navOnline">
        <Link className="auth_navLinksOnline" to="/add">
          <IconsComponent
            className="userpage_icon"
            src="importicon"
            alt="upload icon"
          />
        </Link>
      </li>

      <li className="auth_navOnline">
        <Link to="/artwork_dashboard" className="auth_navLinksOnline">
          Mes publications
        </Link>
      </li>
      <li className="auth_navOnline">
        <Link to="/myinformations" className="auth_navLinksOnline">
          Mes informations personnel
        </Link>
      </li>
      <li className="auth_navOnline">
        <button
          className="auth_navLinksOnline auth_disconnect"
          type="button"
          onClick={handleDisconnected}
        >
          Déconnexion
        </button>
      </li>
      <div className="footerSpace" />
    </div>
  );
}
export default DashboardPage;
