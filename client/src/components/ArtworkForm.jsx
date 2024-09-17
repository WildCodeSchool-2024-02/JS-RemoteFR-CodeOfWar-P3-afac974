import axios from "axios";
import { useState } from "react";

import "../assets/styles/artworkForm.css";

function ArtworkForm() {
  const [dataForm, setFormData] = useState({
    title: "",
    description: "",
    technique: "",
    measurement: "",
    date: "",
    artistId: "",
  });
  const [image, setImage] = useState(null);

  const sendArtwork = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", dataForm.title);
    formData.append("description", dataForm.description);
    formData.append("technique", dataForm.technique);
    formData.append("measurement", dataForm.measurement);
    formData.append("date", dataForm.date);
    formData.append("artistId", dataForm.artistId);
    formData.append("image", image);

    axios
      .post(`${import.meta.env.VITE_API_URL}/api/artworks`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => console.info(response))
      .catch((error) => {
        console.error("There was an error!", error.response);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      <form className="artwork_form" onSubmit={sendArtwork} method="post">
        <label htmlFor="title" className="visually-hidden">
          Title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          value={dataForm.title}
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
          value={dataForm.description}
          onChange={handleChange}
        />
        <label htmlFor="image" className="visually-hidden">
          Image:
        </label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={handleImageChange}
        />
        <label htmlFor="technique" className="visually-hidden">
          Technique:
        </label>
        <input
          type="text"
          id="technique"
          name="technique"
          placeholder="Technique"
          value={dataForm.technique}
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
          value={dataForm.measurement}
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
          value={dataForm.artistId}
          onChange={handleChange}
        />
        <button type="submit" className="confirm_artwork">
          Confirm
        </button>
      </form>
      <p>image</p>
      <input type="file" onChange />
    </>
  );
}

export default ArtworkForm;
