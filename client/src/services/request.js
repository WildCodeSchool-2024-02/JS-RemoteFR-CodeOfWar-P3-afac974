import axios from "axios";

export default function getArtistList() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/artists`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}



// export default function getArtworks() {
//   return axios
//     .get(`${import.meta.env.VITE_API_URL}/api/artworks`)
//     .then((reponse) => reponse.data)
//     .catch((error) => console.error(error));
// }
