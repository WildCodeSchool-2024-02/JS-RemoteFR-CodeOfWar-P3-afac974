import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getArtistList, getArtworks, getArtwork } from "./services/request";

import App from "./App";
import Homepage from "./pages/Homepage";
import ArtworkPage from "./pages/ArtworkPage";
import ArtworksPage from "./pages/ArtworksPage";
import ArtistList from "./pages/ArtistList";
import ArtistsPage from "./pages/ArtistsPage";
import ExhibitionPage from "./pages/ExhibitionPage";
// AuthentificationPages
import AuthPage from "./pages/authentification_pages/AuthPage";
import UserPage from "./pages/authentification_pages/UserPage";
import LoginPage from "./pages/authentification_pages/LoginPage";
import RegisterPage from "./pages/authentification_pages/RegisterPage";

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
      {
        path: "/artwork/:id",
        element: <ArtworkPage />,
        loader: async ({ params }) => ({
          artwork: await getArtwork(params.id),
        }),
      },
      {
        path: "/artists",
        element: <ArtistList />,
        loader: async () => ({
          artists: await getArtistList(),
        }),
      },
      {
        path: "/artworksPage",
        element: <ArtworksPage />,
      },
      {
        path: "/artistsPage",
        element: <ArtistsPage />,
      },
      {
        path: "/exhibitionPage",
        element: <ExhibitionPage />,
      },
      {
        path: "/authpage",
        element: <AuthPage />,
        children: [
          {
            path: "userpage",
            element: <UserPage />,
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/items`),
          },
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "registerpage",
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
