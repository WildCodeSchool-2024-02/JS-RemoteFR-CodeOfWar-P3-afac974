import axios from "axios";

export default function getArtwork(id) {
  return axios
    .get(`http://localhost:3310/api/artworks/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
