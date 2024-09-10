import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import ExhibitionComponent from "../components/exhibitionForm/ExhibitionComponent";
import AddArtworkComponent from "../components/exhibitionForm/AddArtworkComponent";

function ExhibitionForm() {
  const { exhibitions } = useLoaderData();
  console.info(exhibitions);

  const [selectedExhibitionId, setSelectedExhibitionId] = useState(null);

  const handleSelectChange = async (event) => {
    const exhibitionId = event.target.value;
    setSelectedExhibitionId(exhibitionId);
  };

  return (
    <div>
      <select value={selectedExhibitionId} onChange={handleSelectChange}>
        <option value="">Sélectionner une exposition</option>
        {exhibitions.map((exhibition) => (
          <option key={exhibition.id} value={exhibition.id}>
            {exhibition.name}
          </option>
        ))}
      </select>
      {selectedExhibitionId != null && (
        <ExhibitionComponent id={selectedExhibitionId} />
      )}

      {selectedExhibitionId != null && (
        <AddArtworkComponent id={selectedExhibitionId} />
      )}
    </div>
  );
}

export default ExhibitionForm;
