import PropTypes from "prop-types";

export default function ArtistComponent({ user }) {
  return (
    <div className="artistlist_card">
      <img
        src={user.portrait}
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
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
    portrait: PropTypes.string.isRequired,
  }).isRequired,
};
