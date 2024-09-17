import { Link, Outlet, useLocation } from "react-router-dom";
import IconsComponent from "../components/IconsComponent";

function UserPage() {
  const location = useLocation();

  return (
    <div className="userpage_container">
      {location.pathname === "/dashboard" && (
        <>
          <div className="title_userpage">
            <h2>BIENVENUE USERNAME!</h2>
            <Link to="/dashboard/add">
              <IconsComponent
                className="userpage_icon"
                src="importicon"
                alt="upload icon"
              />
            </Link>
          </div>
          <div className="user_options">
            <p>Mes publication</p>
            <p>Mes Ouvres</p>
            <p>Mes Activités</p>
            <p>Informations Personnel</p>
            <p>Deconexion</p>
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
}

export default UserPage;
