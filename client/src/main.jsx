import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import getArtistList from "./services/request";

import App from "./App";
import ArtistList from "./pages/ArtistList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/artists",
    element: <ArtistList />,
    loader: async () => ({
      artists: await getArtistList(),
    }),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
