import { Outlet } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
