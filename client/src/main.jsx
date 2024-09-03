import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import getArtworks from "./services/requets/artworkRequest";

import getArtistList from "./services/request";

import App from "./App";
import ArtistList from "./pages/ArtistList";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: async () => ({
          artworks: await getArtworks(),
        }),
      },
    ],
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
