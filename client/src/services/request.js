import axios from "axios";

export default function getArtistList() {
  return (
    axios
      // .get("http://localhost:3310/api/artists")
      .get(`${import.meta.env.VITE_API_URL}/api/artists`)
      .then((response) => response.data)
      .catch((error) => console.error(error))
  );
}
