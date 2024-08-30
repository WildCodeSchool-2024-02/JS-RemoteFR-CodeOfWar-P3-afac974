import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import getArtwork from "./services/request";
import App from "./App";
import ArtworkPage from "./pages/ArtworkPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/artwork/:id",
    element: <ArtworkPage />,
    loader: async ({ params }) => ({
      artwork: await getArtwork(params.id),
    }),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
