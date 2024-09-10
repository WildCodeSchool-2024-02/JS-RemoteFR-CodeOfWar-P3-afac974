import axios from "axios";
import "../assets/styles/artworkForm.css";

import { useState } from "react";

function ArtworkForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    technique: "",
    measurement: "",
    date: new Date().toISOString().split("T")[0],
    artistId: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendGuitar = (event) => {
    event.preventDefault();

    if (!formData.date) {
      alert("Date field cannot be empty");
      return;
    }

    axios
      .post("http://localhost:3310/api/artworks", formData)
      .then((response) => console.info(response))
      .catch((error) => {
        console.error("There was an error!", error.response);
      });
  };

  return (
    <form className="artwork_form" onSubmit={sendGuitar} method="post">
      <label htmlFor="title" className="visually-hidden">
        Title:
      </label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label htmlFor="description" className="visually-hidden">
        Description:
      </label>
      <textarea
        name="description"
        id="description"
        rows="4"
        cols="50"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <label htmlFor="image" className="visually-hidden">
        Image:
      </label>
      <input
        type="text"
        name="image"
        id="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />
      <label htmlFor="technique" className="visually-hidden">
        Technique:
      </label>
      <input
        type="text"
        id="technique"
        name="technique"
        placeholder="Technique"
        value={formData.technique}
        onChange={handleChange}
      />
      <label htmlFor="measurement" className="visually-hidden">
        Measurement:
      </label>
      <input
        type="text"
        id="measurement"
        name="measurement"
        placeholder="Measurement"
        value={formData.measurement}
        onChange={handleChange}
      />
      <label htmlFor="date" className="visually-hidden">
        Date:
      </label>
      <input
        type="text"
        id="date"
        name="date"
        placeholder="date"
        value={formData.date}
        onChange={handleChange}
      />
      <label htmlFor="artist_id" className="visually-hidden">
        Artist ID:
      </label>
      <input
        type="text"
        id="artist_id"
        name="artistId"
        placeholder="Artist ID"
        value={formData.artistId}
        onChange={handleChange}
      />
      <button type="submit" className="confirm_artwork">
        Confirm
      </button>
    </form>
  );
}

export default ArtworkForm;
