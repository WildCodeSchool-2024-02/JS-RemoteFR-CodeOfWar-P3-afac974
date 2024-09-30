import PropTypes from "prop-types";

export default function ArtistComponent({ user }) {
  return (
    <div className="artistlist_card">
      <img
        src={`${import.meta.env.VITE_API_URL}${user}`}
        alt={`${user.firstname} ${user.lastname}`}
        className="artistlist_image"
      />
      <div className="artistlist_name">
        {user.firstname} {user.lastname}
      </div>
      <div className="artistlist_info">Nationalité : {user.nationality}</div>
      <div className="artistlist_info">Biographie : {user.biography}</div>
    </div>
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
