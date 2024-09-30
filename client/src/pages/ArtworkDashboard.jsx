import { useState, useEffect } from "react";
import { getArtworksByUser } from "../services/request";
import { useAuth } from "../contexts/AuthContext";
import ArtworkComponent from "../components/ArtworkComponent";


export default function ArtworkDashboard() {
  const { auth } = useAuth();
  const [artworks, setArtworks] = useState([])


useEffect(() => {
  const fetchUserArtworks = async () => {
    try {
      const userArtworks = await getArtworksByUser(auth.user.id);
      setArtworks(userArtworks);
    } catch (error) {
      console.error("Error fetching user artworks:", error);
    }
  };
    fetchUserArtworks();
}, [auth.user]);


  return (
    <div className="homePage_artwork_container">
    {artworks.map((artwork) => (
      <ArtworkComponent artwork={artwork} key={artwork.id} />
    ))}
  </div>
  );
}
