import { useLoaderData } from "react-router-dom";

import ArtworkComponent from "../components/ArtworkComponent";
import "../assets/styles/homepage.css";
import CarouselHomepage from "../components/CarouselHomepage";

function Homepage() {
  const { artworks } = useLoaderData();
  const { exhibitions } = useLoaderData();
  const { users } = useLoaderData();

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
        {artworks.map((artwork) => (
          <ArtworkComponent artwork={artwork} key={artwork.id} />
        ))}
      </div>
    </>
  );
}

export default Homepage;
