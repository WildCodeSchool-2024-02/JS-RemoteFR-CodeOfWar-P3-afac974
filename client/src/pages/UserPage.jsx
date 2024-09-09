// import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../assets/styles/userpage.css";
import uploadIcon from "../assets/images/add_image30px.png";

function UserPage() {
  const location = useLocation();

  return (
    <div className="userpage_container">
      {location.pathname === "/dashboard" && (
        <>
          <div className="title_userpage">
            <h2>BIENVENUE USERNAME!</h2>
            <Link to="/dashboard/add">
              <img src={uploadIcon} alt="upload icon" />
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
