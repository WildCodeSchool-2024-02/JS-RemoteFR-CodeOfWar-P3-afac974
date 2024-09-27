import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  getUserList,
  getUser,
  getArtworks,
  getArtwork,
  getExhibitions,
  getArtworksByUser,
  getFavorites,
} from "./services/request";

import { AuthProvider } from "./context/AuthContext";

import App from "./App";
import Homepage from "./pages/Homepage";
import ArtworkPage from "./pages/ArtworkPage";
import ArtworksPage from "./pages/ArtworksPage";
import ArtistList from "./pages/ArtistList";
import ArtistPage from "./pages/ArtistPage";
import Exhibition from "./pages/Exhibition";
import ExhibitionForm from "./pages/ExhibitionForm";
import ArtworkForm from "./components/ArtworkForm";
import AuthPage from "./pages/authentification_pages/AuthPage";
import LoginPage from "./pages/authentification_pages/LoginPage";
import RegisterPage from "./pages/authentification_pages/RegisterPage";
import DashboardPage from "./pages/user_connected_pages/DashboardPage";
import PersonalInformationsPage from "./pages/user_connected_pages/PersonalInformationsPage";
import Favorite from "./pages/Favorite";
import FavoritesProvider from "./contexts/FavoritesContext";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: async () => ({
          artworks: await getArtworks(),
          exhibitions: await getExhibitions(),
          users: await getUserList(),
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
          users: await getUserList(),
        }),
      },
      {
        path: "/artworks",
        element: <ArtworksPage />,
        loader: async () => ({
          artworks: await getArtworks(),
          users: await getUserList(),
          exhibitions: await getExhibitions(),
        }),
      },
      {
        path: "/artistpage/:id",
        element: <ArtistPage />,
        loader: async ({ params }) => ({
          artworksbyuser: await getArtworksByUser(params.id),
          user: await getUser(params.id),
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
        path: "/exhibitionForm",
        element: <ExhibitionForm />,
        loader: async ({ params }) => ({
          exhibitions: await getExhibitions(),
          artworks: await getArtworks(params.id),
        }),
      },
      {
        path: "/authentification",
        element: <AuthPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/myinformations",
        element: <PersonalInformationsPage />,
      },
      {
        path: "/add",
        element: <ArtworkForm />,
      },
      {
        path: "/favoris/:id",
        element: <Favorite />,
        loader: async ({ params }) => ({
          favorites: await getFavorites(params.id),
        }),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </AuthProvider>
  </React.StrictMode>
);
