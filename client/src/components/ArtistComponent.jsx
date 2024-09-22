import PropTypes from "prop-types";

export default function ArtistComponent({ artist }) {
  return (
    <div className="artistlist_card">
      <img
        src={artist.portrait}
        alt={`${artist.firstname} ${artist.lastname}`}
        className="artistlist_image"
      />
      <div className="artistlist_name">
        {artist.firstname} {artist.lastname}
      </div>
      <div className="artistlist_info">Nationalité : {artist.nationality}</div>
      <div className="artistlist_info">Biographie : {artist.biography}</div>
    </div>
  );
}

ArtistComponent.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
    portrait: PropTypes.string.isRequired,
  }).isRequired,
};
