import { Link } from "react-router-dom";

import IconsComponent from "../../components/IconsComponent";

function DashboardPage() {
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
    </div>
  );
}

export default DashboardPage;
