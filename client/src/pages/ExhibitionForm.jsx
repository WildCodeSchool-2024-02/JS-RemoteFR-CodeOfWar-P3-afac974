import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ExhibitionComponent from "../components/exhibitionForm/ExhibitionComponent";
import AddArtworkComponent from "../components/exhibitionForm/AddArtworkComponent";
import CreateExihibition from "../components/exhibitionForm/CreateExihibition";

function ExhibitionForm() {
  const { initialExhibitions, artworks } = useLoaderData();
  const [exhibitions, setExhibitions] = useState(initialExhibitions);
  const [selectedExhibitionId, setSelectedExhibitionId] = useState("");
  const [exhibitionArtworks, setExhibitionArtworks] = useState([]);
  const [showCreateExhibition, setShowCreateExhibition] = useState(false);

  const handleSelectChange = async (event) => {
    const exhibitionId = event.target.value;
    setSelectedExhibitionId(exhibitionId);
  };

  const handleCreateExhibitionClick = () => {
    setShowCreateExhibition(true);
  };

  const handleExhibitionDeleted = (deletedExhibitionId) => {
    setExhibitions((prevExhibitions) =>
      prevExhibitions.filter((exhibition) => exhibition.id !== deletedExhibitionId)
    );
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
        {!selectedExhibitionId && !showCreateExhibition && (
          <button type="button" onClick={handleCreateExhibitionClick}>
            Ouvrir une nouvelle exposition
          </button>
        )}
      </div>
      {selectedExhibitionId && (
  <ExhibitionComponent
    id={selectedExhibitionId}
    exhibitionArtworks={exhibitionArtworks}
    setExhibitionArtworks={setExhibitionArtworks}
    onExhibitionDeleted={handleExhibitionDeleted}
  />
      )}
      {showCreateExhibition && <CreateExihibition />}
    </section>
  );
}

export default ExhibitionForm;
