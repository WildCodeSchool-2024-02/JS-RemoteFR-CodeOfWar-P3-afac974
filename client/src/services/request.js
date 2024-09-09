import axios from "axios";

export function getArtistList() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/artists`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getArtworks() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/artworks`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getArtwork(id) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/artworks/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
