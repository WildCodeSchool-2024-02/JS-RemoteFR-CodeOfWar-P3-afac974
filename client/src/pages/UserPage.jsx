import { Link } from "react-router-dom";
import uploadIcon from "../assets/images/add_image30px.png";

function UserPage() {
  return (
    <div>
      <h2>Bienvenue a ton space sur FuturArt</h2>
      <div>
        <img src={uploadIcon} alt="upload your images" />
      </div>

      <Link to="/">Retour</Link>
    </div>
  );
}

export default UserPage;
