import { Link, useLoaderData } from "react-router-dom";
import ExhibitionComponent from "../components/ExhibitionComponent";

function Exhibition() {
  const exhibitions = useLoaderData();
  return (
    <>
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
      <div className="footerSpace" />
    </>
  );
}

export default Exhibition;
