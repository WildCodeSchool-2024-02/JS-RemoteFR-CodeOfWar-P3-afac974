import { useLoaderData } from "react-router-dom";

function ArtworkComponent() {
  const { artworks } = useLoaderData();
  console.info(artworks);
  return (
    <>
      {artworks.map((artwork) => (
        <section key={artwork.id} className="expo_img">
          <div className="scroll_img">
            <h2>{artwork.title}</h2>
            <figcaption>{artwork.description}</figcaption>
          </div>
        </section>
      ))}
    </>
  );
}

export default ArtworkComponent;
