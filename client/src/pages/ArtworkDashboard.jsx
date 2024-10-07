import { useState, useEffect } from "react";
import { getArtworksByUser, deleteArtwork } from "../services/request";
import { useAuth } from "../contexts/AuthContext";
import ArtworkComponent from "../components/ArtworkComponent";

export default function ArtworkDashboard() {
  const { auth } = useAuth();
  const [artworks, setArtworks] = useState([]);

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
  const handleDelete = async (artworkId) => {
    if (artworkId) {
      try {
        await deleteArtwork(artworkId);
        setArtworks((prevArtworks) =>
          prevArtworks.filter((artwork) => artwork.id !== artworkId)
        );
      } catch (error) {
        console.error("Erreur lors de la suppression de l'œuvre:", error);
      }
    }
  };

  return (
    <div className="homePage_artwork_container">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="artworkUser">
          <ArtworkComponent artwork={artwork} />
          <button type="button" onClick={() => handleDelete(artwork.id)}>
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
}
