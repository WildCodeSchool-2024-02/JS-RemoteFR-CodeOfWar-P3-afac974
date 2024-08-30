import { Outlet } from "react-router-dom";
import "./App.css";

import "./assets/styles/artworkpage.css";

function App() {
  return (
    <body>
      <main>
        <Outlet />
      </main>
    </body>
  );
}
export default App;
