import { useRef, useState, useEffect } from "react";
import Phaser from "phaser"

import { getExhibitionArtwork } from "../../services/request";

import Picture from "../../components/virtualVisit/Picture";

import preload from "../../components/virtualVisit/preload";
import create from "../../components/virtualVisit/create";
import playerMove from "../../components/virtualVisit/playerMove";


function VirtualVisit() {
    const phaserGame = useRef(null);

    const [message, setMessage] = useState("");
    const [pictures, setPictures] = useState([])

    useEffect(() => {
      const fetchPictures = async () => {
        try {
          const result = await getExhibitionArtwork(1);
          setPictures(result);
        } catch (err) {
          err(err.message);
        }
      };
      fetchPictures();
    }, []); 

    useEffect(() => {
        const config = {
          type: Phaser.AUTO,
          parent: "gameContainer",
          width: 800,
          height: 800,
          backgroundColor: "#179ac5",
          scene: {
            preload() {
              preload.call(this);
            },
            create() {
              create.call(this, setMessage);
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
        };
    phaserGame.current = new Phaser.Game(config);

    return () => {
      if (phaserGame.current) {
        phaserGame.current.destroy(true);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Picture message={message} artwork={pictures[message]} />
  )
}

export default VirtualVisit