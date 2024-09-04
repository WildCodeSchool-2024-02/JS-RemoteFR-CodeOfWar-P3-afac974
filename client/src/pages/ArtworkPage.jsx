import { useLoaderData } from "react-router-dom";

import "../assets/styles/artworkpage.css";

function ArtworkPage() {
  const { artwork } = useLoaderData();
  return (
    <>
      <div className="artworkPage_pagePosition">
        <img
          className="artworkPage_logoPagePosition"
          src={`${import.meta.env.VITE_API_URL}/assets/images/logo_house.png`}
          alt="logo_house"
        />
        <h1 className="artworkPage_namePagePosition">
          {" "}
          {"> Les oeuvres > Nom de l'oeuvre"}
        </h1>
      </div>

      <div className="artworkPage_tag">
        <p>Tags :</p>
        <ul className="artworkPage_tags">
          <li>tag 1</li>
          <li>tag 2</li>
          <li>tag 3</li>
        </ul>
      </div>
      <div className="artworkPage_oneOeuvre">
        <img
          className="artworkPage_oneOeuvrePic"
          src={`${import.meta.env.VITE_API_URL}${artwork.image_url}`}
          alt={artwork.title}
        />
      </div>
      <div className="artworkPage_nameOeuvre">
        <p>Léo DUMONT</p>
        <p>{artwork.title}</p>
        <p>{artwork.date}</p>
      </div>

      <div className="artworkPage_fav_com">
        <p>Un coup de coeur ? Ajouter la à vos favoris</p>
        <p>Une pensée ? Faites la vivre en commentaire</p>
      </div>

      <div className="artworkPage_tech_oeuvre">
        <p>A propos de l'oeuvre</p>
        <ul className="artworkPage_diversTech">
          <li>
            <span>Technique :</span> non renseigné
          </li>
          <li>
            <span>Dimensions :</span> non renseigné
          </li>
          <li>
            <span>Description :</span> {artwork.description}
          </li>
        </ul>
      </div>
    </>
  );
}

export default ArtworkPage;
