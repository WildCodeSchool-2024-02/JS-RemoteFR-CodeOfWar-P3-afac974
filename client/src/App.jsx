import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./components/NavbarComponent";

import "./App.css";
import "./assets/styles/homepage.css";
import "./assets/styles/navbarcomponent.css";
import "./assets/styles/artworkpage.css";
import "./assets/styles/artistlist.css";
import "./assets/styles/authentification_styles/authpage.css";
import "./assets/styles/authentification_styles/loginpage.css";
import "./assets/styles/authentification_styles/registerpage.css";
import "./assets/styles/backbuttoncomponent.css";

function App() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <main>
      {!hideNavbar && <Navbar />} <Outlet />
    </main>
  );
}

export default App;
