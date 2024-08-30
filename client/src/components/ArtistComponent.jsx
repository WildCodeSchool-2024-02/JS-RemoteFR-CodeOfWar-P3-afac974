import PropTypes from "prop-types";

export default function ArtistComponent({ artist }) {
  return (
    <ul>
      <li>
        {artist.firstname} {artist.lastname}
      </li>
      <li>Nationalité : {artist.nationality}</li>
      <li>Biographie : {artist.biography}</li>
    </ul>
  );
}

ArtistComponent.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired,
}.isRequired;
