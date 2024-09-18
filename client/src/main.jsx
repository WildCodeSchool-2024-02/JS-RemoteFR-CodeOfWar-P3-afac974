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
import ExhibitionForm from "./pages/ExhibitionForm";
import UserPage from "./pages/UserPage";
import ArtworkForm from "./components/ArtworkForm";
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
        path: "/exhibitionForm",
        element: <ExhibitionForm />,
        loader: async () => ({
          exhibitions: await getExhibitions(),
          artworks: await getArtworks(),
        }),
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
        path: "/favoris",
        element: <Favorite />,
        loader: async ({ params }) => ({
          artwork: await getArtwork(params.id),
        }),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </React.StrictMode>
);
