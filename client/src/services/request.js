import axios from "axios";

export function getArtistList() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/artists`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
export function getArtist(id) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/artists/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getArtworks() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/artworks`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getArtwork(id) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/artworks/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
export function getArtworksByArtist(artistId) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/artists/${artistId}/artworks`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
