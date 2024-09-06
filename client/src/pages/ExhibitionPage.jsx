import { Link, useLoaderData } from "react-router-dom";
import ExhibitionComponent from "../components/ExhibitionComponent";
import "../assets/styles/exhibitionpage.css";

function ExhibitionPage() {
  const exhibitions = useLoaderData();
  return (
    <>
      <div className="artworkPage_pagePosition">
        <img
          className="artworkPage_logoPagePosition"
          src={`${import.meta.env.VITE_API_URL}/assets/images/logo_house.png`}
          alt="logo_house"
        />
        <h1 className="artworkPage_namePagePosition"> {"> aaaaa > bbbbb"}</h1>
      </div>

      <div className="artworkPage_tag">
        <p>Tags :</p>
        <ul className="artworkPage_tags">
          <li>tag 1</li>
          <li>tag 2</li>
          <li>tag 3</li>
        </ul>
      </div>
      <h1>Liste des expositions</h1>
      <div className="artworkPage_fav_com">
        <div>
          {exhibitions.exhibitions.map((exhibition) => (
            <ExhibitionComponent key={exhibition.id} exhibition={exhibition} />
          ))}
        </div>
      </div>

      <Link to="/" className="homePage_navButtons">
        HomePage
      </Link>
    </>
  );
}

export default ExhibitionPage;
