import { Outlet } from "react-router-dom";

import "./App.css";
import "./assets/styles/artworkpage.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
