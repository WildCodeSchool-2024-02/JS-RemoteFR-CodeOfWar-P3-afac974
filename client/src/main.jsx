import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  getArtistList,
  getArtist,
  getArtworks,
  getArtwork,
  getExhibitions,
  getArtworksByArtist,
} from "./services/request";

import App from "./App";
import Homepage from "./pages/Homepage";
import ArtworkPage from "./pages/ArtworkPage";
import ArtworksPage from "./pages/ArtworksPage";
import ArtistList from "./pages/ArtistList";
import ArtistPage from "./pages/ArtistPage";
import Exhibition from "./pages/Exhibition";
import UserPage from "./pages/UserPage";
import ArtworkForm from "./components/ArtworkForm";

import AuthPage from "./pages/authentification_pages/AuthPage";
import LoginPage from "./pages/authentification_pages/LoginPage";
import RegisterPage from "./pages/authentification_pages/RegisterPage";

import { AuthProvider } from "./context/AuthContext";

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
        path: "/artworkspage",
        element: <ArtworksPage />,
        loader: async () => ({
          artworks: await getArtworks(),
        }),
      },
      {
        path: "/artistpage/:id",
        element: <ArtistPage />,
        loader: async ({ params }) => ({
          artworksbyartist: await getArtworksByArtist(params.id),
          artist: await getArtist(params.id),
        }),
      },
      {
        path: "/exhibition",
        element: <Exhibition />,
        loader: async () => ({
          exhibitions: await getExhibitions(),
        }),
      },
      {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/dashboard",
        element: <UserPage />,
        children: [
          {
            path: "/dashboard/add",
            element: <ArtworkForm />,
          },
        ],
      },
      {
        path: "/authentification",
        element: <AuthPage />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/items`),
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
