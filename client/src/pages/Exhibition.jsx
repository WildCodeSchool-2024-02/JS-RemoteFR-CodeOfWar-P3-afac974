import { Link, useLoaderData } from "react-router-dom";
import ExhibitionComponent from "../components/ExhibitionComponent";

function Exhibition() {
  const exhibitions = useLoaderData();
  return (
    <>
      <div className="exhibition_pagePosition">
        <img
          className="exhibition_logoPagePosition"
          src={`${import.meta.env.VITE_API_URL}/assets/images/logo_house.png`}
          alt="logo_house"
        />
        <h1 className="exhibition_namePagePosition"> {"> aaaaa > bbbbb"}</h1>
      </div>

      <div className="exhibition_tag">
        <p>Tags :</p>
        <ul className="exhibition_tags">
          <li>tag 1</li>
          <li>tag 2</li>
          <li>tag 3</li>
        </ul>
      </div>
      <h1 className="exhibition_title">Liste des expositions</h1>
      <div className="exhibition_section">
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

export default Exhibition;
