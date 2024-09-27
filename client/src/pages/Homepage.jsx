import { useLoaderData } from "react-router-dom";

import ArtworkComponent from "../components/ArtworkComponent";
import "../assets/styles/homepage.css";
import CarouselHomepage from "../components/CarouselHomepage";

function Homepage() {
  const { artworks, exhibitions, artists } = useLoaderData();

  return (
    <>
      <CarouselHomepage
        artwork={artworks}
        exhibition={exhibitions}
        artist={artists}
      />

      <div className="homePage_artwork_container">
        {artworks.map((artwork) => (
          <ArtworkComponent artwork={artwork} key={artwork.id} />
        ))}
      </div>
    </>
  );
}

export default Homepage;
