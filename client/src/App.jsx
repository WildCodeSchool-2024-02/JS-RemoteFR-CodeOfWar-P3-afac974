import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";

import "./App.css";
import "./assets/styles/homepage.css";
import "./assets/styles/navbarcomponent.css";
import "./assets/styles/artworkpage.css";
import "./assets/styles/artistlist.css";
import "./assets/styles/artworkForm.css";
import "./assets/styles/exhibition.css";
import "./assets/styles/exhibitionForm.css";
import "./assets/styles/favorites.css";
import "./assets/styles/artistprofile.css";
import "./assets/styles/authentification_styles/authpage.css";
import "./assets/styles/authentification_styles/loginpage.css";
import "./assets/styles/authentification_styles/registerpage.css";
import "./assets/styles/authentification_styles/backbuttoncomponent.css";
import "./assets/styles/user_connected_styles/personalinformationspage.css";
import "./assets/styles/footercomponent.css";
import "./assets/styles/confirmButton.css";

function App() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/myinformations";
  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className="app_main">
        <Outlet />
      </main>
      {!hideNavbar && <Footer />}
    </>
  );
}

export default App;
