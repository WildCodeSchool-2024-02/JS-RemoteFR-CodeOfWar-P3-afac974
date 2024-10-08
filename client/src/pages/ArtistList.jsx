import { useLoaderData } from "react-router-dom";
import ArtistComponent from "../components/ArtistComponent";

function ArtistList() {
  const { users } = useLoaderData();

  return (
    <div className="artistlist_area">
      <h1 className="artistlist_name">Nos artistes</h1>
      <div className="artistlist_container">
        {users.map((user) => (
          <ArtistComponent user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default ArtistList;
