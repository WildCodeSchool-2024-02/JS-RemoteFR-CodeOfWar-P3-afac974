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

export function getExhibition(id) {
  return axios
    .get(`${url}/api/exhibition/${id}`)
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
export function updateUserInfo(id, userData) {
  return axios
    .put(`${import.meta.env.VITE_API_URL}/api/users/${id}`, userData)
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

export function deleteExhibition(exhibitionId) {
  return axios
    .delete(`${import.meta.env.VITE_API_URL}/api/exhibition/${exhibitionId}`, {
      withCredentials: true,
    })
    .then((reponse) => reponse.data);
}

export function createExhibition(
  exhibitionName,
  exhibitionDescription,
  exhibitionType,
  exhibitionDateBegin,
  exhibitionDateEnd
) {
  return axios.post(`${import.meta.env.VITE_API_URL}/api/exhibition`, {
    name: exhibitionName,
    description: exhibitionDescription,
    type: exhibitionType,
    date_begin: exhibitionDateBegin,
    date_end: exhibitionDateEnd,
  });
}

export function getUserId() {
  return axios
    .get(`${url}/api/getUserId`, { withCredentials: true })
    .then((response) => response.data.userId)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
