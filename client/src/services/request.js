import axios from "axios";








export default function getArtworks() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/artworks`)
    .then((reponse) => reponse.data)
    .catch((error) => console.error(error));
}
