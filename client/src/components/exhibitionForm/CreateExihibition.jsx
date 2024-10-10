import { useState } from "react";
import { createExhibition } from "../../services/request";

function CreateExihibition() {
  const [exhibitionName, setExhibitionName] = useState("");
  const [exhibitionDescription, setExhibitionDescription] = useState("");
  const [exhibitionType, setExhibitionType] = useState("PERMANENT");
  const [exhibitionDateBegin, setExhibitionDateBegin] = useState("9999-12-12");
  const [exhibitionDateEnd, setExhibitionDateEnd] = useState("9999-12-12");

  const handleSubmit = async () => {
    try {
      const finalExhibitionDateBegin =
        exhibitionType === "PERMANENT" ? "9999-12-12" : exhibitionDateBegin;
      const finalExhibitionDateEnd =
        exhibitionType === "PERMANENT" ? "9999-12-12" : exhibitionDateEnd;

      await createExhibition(
        exhibitionName,
        exhibitionDescription,
        exhibitionType,
        finalExhibitionDateBegin,
        finalExhibitionDateEnd
      );

      setExhibitionName("");
      setExhibitionDescription("");
      setExhibitionType("PERMANENT");
      setExhibitionDateBegin("9999-12-12");
      setExhibitionDateEnd("9999-12-12");
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  return (
    <div>
      <h2>Créer une nouvelle exposition</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="exhibitionName">Nom de l'exposition :</label>
          <input
            type="text"
            id="exhibitionName"
            value={exhibitionName}
            onChange={(event) => setExhibitionName(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="exhibitionDescription">Description :</label>
          <textarea
            id="exhibitionDescription"
            value={exhibitionDescription}
            onChange={(event) => setExhibitionDescription(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="exhibitionType">Type d'exposition :</label>
          <select
            id="exhibitionType"
            value={exhibitionType}
            onChange={(event) => {
              setExhibitionType(event.target.value);

              if (event.target.value === "PERMANENT") {
                setExhibitionDateBegin("9999-12-12");
                setExhibitionDateEnd("9999-12-12");
              } else {
                setExhibitionDateBegin("");
                setExhibitionDateEnd("");
              }
            }}
            required
          >
            <option value="PERMANENT">PERMANENT</option>
            <option value="TEMPORARY">TEMPORARY</option>
          </select>
        </div>

        {exhibitionType === "TEMPORARY" && (
          <>
            <div>
              <label htmlFor="exhibitionDateBegin">Date de début :</label>
              <input
                type="date"
                id="exhibitionDateBegin"
                value={exhibitionDateBegin}
                onChange={(event) => setExhibitionDateBegin(event.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="exhibitionDateEnd">Date de fin :</label>
              <input
                type="date"
                id="exhibitionDateEnd"
                value={exhibitionDateEnd}
                onChange={(event) => setExhibitionDateEnd(event.target.value)}
                required
              />
            </div>
          </>
        )}

        <button type="submit">Créer l'exposition</button>
      </form>
    </div>
  );
}

export default CreateExihibition;
