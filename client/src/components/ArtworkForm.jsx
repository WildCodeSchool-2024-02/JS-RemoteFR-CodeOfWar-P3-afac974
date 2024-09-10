import { useState } from "react";
import "../assets/styles/artworkForm.css";

function ArtworkForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [artistId, setArtistId] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleArtistIdChange = (event) => {
    setArtistId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="artwork_form" onSubmit={handleSubmit}>
      <label htmlFor="title" className="visually-hidden">
        Title:
      </label>
      <input
        type="text"
        id="title"
        placeholder="title"
        value={title}
        onChange={handleTitleChange}
      />
      <label htmlFor="description" className="visually-hidden">
        Description:
      </label>
      <textarea
        id="description"
        value={description}
        rows="4"
        cols="50"
        placeholder="Description"
        onChange={handleDescriptionChange}
      />
      <label htmlFor="image" className="visually-hidden">
        Image:
      </label>
      <input type="text" id="image" name="image" placeholder="Image URL" />
      <label htmlFor="technique" className="visually-hidden">
        Technique:
      </label>
      <input
        type="text"
        id="technique"
        name="technique"
        placeholder="Technique"
      />
      <label htmlFor="measurament" className="visually-hidden">
        Measurement:
      </label>
      <input
        type="text"
        id="measurament"
        name="measurament"
        placeholder="Measurement"
      />
      <label htmlFor="date" className="visually-hidden">
        Date:
      </label>
      <input type="text" id="date" name="date" placeholder="date" />
      <label htmlFor="artist_id" className="visually-hidden">
        Artist ID:
      </label>
      <input
        type="text"
        id="artist_id"
        value={artistId}
        name="artist_id"
        placeholder="Artist ID"
        onChange={handleArtistIdChange}
      />
      <button type="submit" className="confirm_artwork">
        Confirm
      </button>
    </form>
  );
}

export default ArtworkForm;
