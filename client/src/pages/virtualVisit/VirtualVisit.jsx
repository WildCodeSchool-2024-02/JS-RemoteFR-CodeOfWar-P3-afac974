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
  const phaserGame = useRef(null);

  const [message, setMessage] = useState("");

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 960,
      height: 300,
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
          debug: true,
        },
      },
    };

    phaserGame.current = new Phaser.Game(config);

    return () => {
      if (phaserGame.current) {
        phaserGame.current.destroy(true);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Picture message={message} artwork={artworks[message]} />;
}

export default VirtualVisit;
