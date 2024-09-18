import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import ExhibitionComponent from "../components/exhibitionForm/ExhibitionComponent";
import AddArtworkComponent from "../components/exhibitionForm/AddArtworkComponent";

function ExhibitionForm() {
  const { exhibitions, artworks } = useLoaderData();
  const [selectedExhibitionId, setSelectedExhibitionId] = useState("");
  const [exhibitionArtworks, setExhibitionArtworks] = useState([]);

  const handleSelectChange = async (event) => {
    const exhibitionId = event.target.value;
    setSelectedExhibitionId(exhibitionId);
  };

  return (
    <section>
      <div className="selectionExhibitionArtwork">
        <select value={selectedExhibitionId} onChange={handleSelectChange}>
          <option value="">Sélectionner une exposition</option>
          {exhibitions.map((exhibition) => (
            <option key={exhibition.id} value={exhibition.id}>
              {exhibition.name}
            </option>
          ))}
        </select>
        {selectedExhibitionId && (
          <AddArtworkComponent
            id={selectedExhibitionId}
            artworks={artworks}
            exhibitionArtworks={exhibitionArtworks}
            setExhibitionArtworks={setExhibitionArtworks}
          />
        )}
      </div>
      {selectedExhibitionId && (
        <ExhibitionComponent
          id={selectedExhibitionId}
          exhibitionArtworks={exhibitionArtworks}
          setExhibitionArtworks={setExhibitionArtworks}
        />
      )}
    </section>
  );
}

export default ExhibitionForm;
