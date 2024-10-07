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
  getExhibitionArtwork,
} from "./services/request";

import { AuthProvider } from "./contexts/AuthContext";
import FavoritesProvider from "./contexts/FavoritesContext";

import App from "./App";
import Homepage from "./pages/Homepage";
import ArtworkPage from "./pages/ArtworkPage";
import ArtworksPage from "./pages/ArtworksPage";
import ArtworkDashboard from "./pages/ArtworkDashboard";
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
import VirtualVisit from "./pages/virtualVisit/VirtualVisit";

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
        path: "/artwork_dashboard",
        element: <ArtworkDashboard />,
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
        loader: async () => ({
          exhibitions: await getExhibitions(),
          artworks: await getArtworks(),
        }),
        errorElement: <LoginPage />,
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
      {
        path: "/visit/:id",
        element: <VirtualVisit />,
        loader: async ({ params }) => ({
          artworks: await getExhibitionArtwork(params.id),
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
