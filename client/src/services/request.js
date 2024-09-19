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

export function getExhibitions() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/exhibition`)
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

export function getExhibitionArtwork(id) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/exhibition/${id}/artworks`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
export function getUserInfo(id) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/users/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function deleteExhibitionArtwork(exhibitionId, artworkId) {
  return axios
    .delete(
      `${import.meta.env.VITE_API_URL}/api/exhibition/${exhibitionId}/artworks/${artworkId}`
    )
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function postExhibitionArtwork(exhibitionID, artworkID) {
  return axios
    .post(`${import.meta.env.VITE_API_URL}/api/exhibition/artworks`, {
      exhibition_id: exhibitionID,
      artwork_id: artworkID,
    })
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function postloginUser(userData) {
  return axios
    .post(`${import.meta.env.VITE_API_URL}/api/login`, userData, {
      withCredentials: true,
    })
    .then((reponse) => reponse)
    .catch((error) => {
      console.error(
        "Erreur lors de la requête de connexion:",
        error.response.data
      );
      return [];
    });
}

export function postRegisterUser(userData) {
  return axios
    .post(`${import.meta.env.VITE_API_URL}/api/users`, userData)
    .then((reponse) => reponse)
    .catch((error) => {
      console.error(
        "Erreur lors de la requête d'inscription:",
        error.response.data
      );
      return [];
    });
}
export function updateUserInfo(id) {
  return axios
    .put(`${import.meta.env.VITE_API_URL}/api/users/${id}`)
    .then((reponse) => reponse)
    .catch((error) => {
      console.error(
        "Erreur lors de la requête de mise à jour des informations de l'utilisateur:",
        error.response.data
      );
      return [];
    });
}
export function deleteAccount(id) {
  return axios
    .delete(`${import.meta.env.VITE_API_URL}/api/users/${id}/destroy`)
    .then((reponse) => reponse)
    .catch((error) => {
      console.error(
        "Erreur lors de la requête de suppression du compte utilisateur:",
        error.response.data
      );
      return [];
    });
}
