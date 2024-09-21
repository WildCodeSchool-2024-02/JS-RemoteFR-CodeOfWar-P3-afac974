import { useLoaderData } from "react-router-dom";

function MyArtworks() {
  const artworks = useLoaderData();
  console.info(artworks);
  return <div>Hello from MyArtworks</div>;
}

export default MyArtworks;
