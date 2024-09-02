import { Outlet } from "react-router-dom";
import "./App.css";
import "./assets/styles/artworkpage.css";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
