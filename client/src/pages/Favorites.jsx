import { Link, useLoaderData } from "react-router-dom";
import "../assets/styles/favorites.css";

function Favorites() {
  const { artwork } = useLoaderData();
  return (
    <>
      <h3>CECI EST LA PAGE FAVORIS</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        obcaecati tempore doloribus consequatur modi! Necessitatibus quam sint
        eligendi iure aliquam. Incidunt, ipsam provident architecto pariatur
        aliquid laudantium voluptate ratione! Earum?
      </p>
      <div>
        <img
          className="test favoris"
          src={`${import.meta.env.VITE_API_URL}${artwork.image_url}`}
          alt={artwork.title}
        />
      </div>
      <Link to="/" className="homePage_navButtons">
        HomePage
      </Link>
    </>
  );
}
export default Favorites;
