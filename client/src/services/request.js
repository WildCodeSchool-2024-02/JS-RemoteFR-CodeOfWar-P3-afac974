import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export function getArtistList() {
  return axios
    .get(`${url}/api/artists`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
export function getArtist(id) {
  return axios
    .get(`${url}/api/artists/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getArtworks() {
  return axios
    .get(`${url}/api/artworks`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getArtwork(id) {
  return axios
    .get(`${url}/api/artworks/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getExhibitions() {
  return axios
    .get(`${url}/api/exhibition`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getArtworksByArtist(artistId) {
  return axios
    .get(`${url}/api/artists/${artistId}/artworks`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getExhibitionArtwork(id) {
  return axios
    .get(`${url}/api/exhibition/${id}/artworks`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function deleteExhibitionArtwork(exhibitionId, artworkId) {
  return axios
    .delete(`${url}/api/exhibition/${exhibitionId}/artworks/${artworkId}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function postExhibitionArtwork(exhibitionID, artworkID) {
  return axios
    .post(`${url}/api/exhibition/artworks`, {
      exhibition_id: exhibitionID,
      artwork_id: artworkID,
    })
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getFavorites(id) {
  return axios
    .get(`${url}/api/favorite/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function addFavorite(artworkId, userId) {
  return axios
    .post(`${url}/api/favorite`, { artwork_id: artworkId, user_id: userId })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function deleteFavorite(artworkId, userId) {
  return axios
    .delete(`${url}/api/favorite/${artworkId}/${userId}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
