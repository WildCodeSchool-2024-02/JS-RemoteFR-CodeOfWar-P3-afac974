import PropTypes from "prop-types";

export default function ExhibitionComponent({ exhibition }) {
  return (
    <div>
      <h2>{exhibition.name}</h2>
      <p>{exhibition.description}</p>
      <p>Date de début : {exhibition.date_begin}</p>
      <p>Date de fin : {exhibition.date_end}</p>
    </div>
  );
}

ExhibitionComponent.propTypes = {
  exhibition: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    date_begin: PropTypes.string,
    date_end: PropTypes.string,
  }).isRequired,
};
