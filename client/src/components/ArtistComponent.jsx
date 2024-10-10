import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ArtistComponent({ user }) {
  return (
    <Link to={`/artistpage/${user.id}`} className="homePage_navButtons">
      <div className="artistlist_card">
        <img
          src={`${import.meta.env.VITE_API_URL}${user.avatar}`}
          alt={`${user.firstname} ${user.lastname}`}
          className="artistlist_image"
        />
        <div className="artistlist_name">
          {user.firstname} {user.lastname}
        </div>
        <div className="artistlist_info">Nationalité : {user.nationality}</div>
        <div className="artistlist_info">Biographie : {user.biography}</div>
      </div>
    </Link>
  );
}

ArtistComponent.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    nationality: PropTypes.string,
    biography: PropTypes.string,
    portrait: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};
