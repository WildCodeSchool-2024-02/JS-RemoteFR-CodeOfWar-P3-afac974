import axios from "axios";

const url = import.meta.env.VITE_API_URL;

// ----------------------GET-----------------------------------------

// GET Table user

export function getUserId() {
  return axios
    .get(`${url}/api/getUserId`, { withCredentials: true })
    .then((response) => response.data.userId)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function getUserList() {
  return axios
    .get(`${url}/api/users`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getUser(id) {
  return axios
    .get(`${url}/api/users/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getArtworksByUser(userId) {
  return axios
    .get(`${url}/api/users/${userId}/artworks`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// GET Table artwork

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

// GET Table exhibition

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

// GET Table artwork_exhibition

export function getExhibitionArtwork(id) {
  return axios
    .get(`${url}/api/exhibition/${id}/artworks`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// GET Table favorite

export function getFavorites(id) {
  return axios
    .get(`${url}/api/favorite/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// ----------------------POST-----------------------------------------

// POST Table user

export function postloginUser(userData) {
  return axios
    .post(`${url}/api/login`, userData, {
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
    .post(`${url}/api/users`, userData)
    .then((reponse) => reponse)
    .catch((error) => {
      console.error(
        "Erreur lors de la requête d'inscription:",
        error.response.data
      );
      return [];
    });
}

// POST Table artwork

// POST Table exhibition

export function createExhibition(
  exhibitionName,
  exhibitionDescription,
  exhibitionType,
  exhibitionDateBegin,
  exhibitionDateEnd
) {
  return axios.post(`${url}/api/exhibition`, {
    name: exhibitionName,
    description: exhibitionDescription,
    type: exhibitionType,
    date_begin: exhibitionDateBegin,
    date_end: exhibitionDateEnd,
  });
}

// POST Table artwork_exhibition

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

// POST Table favorite

export function addFavorite(artworkId, userId) {
  return axios
    .post(`${url}/api/favorite`, { artwork_id: artworkId, user_id: userId })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// ----------------------PUT-----------------------------------------

// PUT Table user

export function updateUserInfo(id, userData) {
  return axios
    .put(`${url}/api/users/${id}`, userData)
    .then((reponse) => reponse)
    .catch((error) => {
      console.error(
        "Erreur lors de la requête de mise à jour des informations de l'utilisateur:",
        error.response.data
      );
      return [];
    });
}

// PUT Table artwork

// PUT Table exhibition

// PUT Table artwork_exhibition

// PUT Table favorite

// ----------------------DELETE-----------------------------------------

// DELETE Table user

export function deleteAccount(id) {
  return axios
    .delete(`${url}/api/users/${id}/destroy`)
    .then((reponse) => reponse)
    .catch((error) => {
      console.error(
        "Erreur lors de la requête de suppression du compte utilisateur:",
        error.response.data
      );
      return [];
    });
}

// DELETE Table artwork

// DELETE Table exhibition

export function deleteExhibition(exhibitionId) {
  return axios
    .delete(`${url}/api/exhibition/${exhibitionId}`, {
      withCredentials: true,
    })
    .then((reponse) => reponse.data);
}

// DELETE Table artwork_exhibition

export function deleteExhibitionArtwork(exhibitionId, artworkId) {
  return axios
    .delete(`${url}/api/exhibition/${exhibitionId}/artworks/${artworkId}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// DELETE Table favorite

export function deleteFavorite(artworkId, userId) {
  return axios
    .delete(`${url}/api/favorite/${artworkId}/${userId}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
