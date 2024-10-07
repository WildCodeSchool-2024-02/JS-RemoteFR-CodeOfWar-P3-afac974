import { useLoaderData } from "react-router-dom";

import ArtworkComponent from "../components/ArtworkComponent";
import CarouselHomepage from "../components/CarouselHomepage";

function Homepage() {
  const { artworks, exhibitions, users } = useLoaderData();
  const lastArtwork = artworks
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 12);
  console.info(lastArtwork);
  return (
    <>
      <CarouselHomepage
        artwork={artworks}
        exhibition={exhibitions}
        user={users}
      />
      <h1 className="homePage_temporaryEvent">Evénnements temporaire</h1>
      <p className="homePage_temporaryEvent">Temporairement indisponible</p>
      <h2 className="homePage_discorverArtworks">
        Découvrez les oeuvres de nos artistes
      </h2>
      <div className="homePage_artwork_container">
        {lastArtwork.map((artwork) => (
          <ArtworkComponent artwork={artwork} key={artwork.id} />
        ))}
      </div>
    </>
  );
}

export default Homepage;
