import { useRef, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Phaser from "phaser";
import "../../assets/styles/Picture.css";
import Picture from "../../components/virtualVisit/Picture";
import preload from "../../components/virtualVisit/preload";
import create from "../../components/virtualVisit/create";
import playerMove from "../../components/virtualVisit/playerMove";

function VirtualVisit() {
  const { artworks } = useLoaderData();
  const gameContainer = useRef(null);
  const phaserGame = useRef(null);

  const [message, setMessage] = useState("");

  const easterEggArtwork = {
    nom_de_l_oeuvre: "Joconde Ratée",
    artiste: "Artiste Mystère",
    description:
      "Une tentative humoristique et ratée de recréer la célèbre Joconde.",
    pictures: "/assets/images/PicturesTest/jocond.webp",
  };

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 1520, // Ajuste les dimensions du jeu ici si nécessaire
      height: 450,
      backgroundColor: "#179ac5",
      scene: {
        preload() {
          preload.call(this);
        },
        create() {
          create.call(this, setMessage, artworks);
        },
        update() {
          playerMove.call(this, setMessage, message);
        },
      },
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
      parent: gameContainer.current, // Phaser placera le jeu dans ce conteneur
    };

    phaserGame.current = new Phaser.Game(config);

    return () => {
      if (phaserGame.current) {
        phaserGame.current.destroy(true);
      }
    };
  }, []);

  const currentArtwork =
    message === "easterEgg" ? easterEggArtwork : artworks[message];

  return (
    <div className="virtualVisitContainer">
      <Picture message={message} artwork={currentArtwork} />
      <div ref={gameContainer} className="gameContainer">
        {" "}
      </div>
    </div>
  );
}

export default VirtualVisit;
