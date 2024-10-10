import { useLoaderData } from "react-router-dom";

import ArtworkComponent from "../components/ArtworkComponent";

function ArtworksPage() {
  const { artworks } = useLoaderData();
  return (
    <div>
      <h1>Toutes les Oeuvres</h1>
      <div className="homePage_artwork_container">
        {artworks.map((artwork) => (
          <ArtworkComponent artwork={artwork} key={artwork.id} />
        ))}
      </div>
      <div className="footerSpace" />
    </div>
  );
}

export default ArtworksPage;
