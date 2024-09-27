import playerImage from "../../assets/phaser/Characters_spritesheet.png";
import frameImage from "../../assets/phaser/Frame.png";
import mapImage from "../../assets/phaser/map.png"
import carreImage from "../../assets/phaser/Carrerouge.png"

export default function preload() {
  this.load.image("frame", frameImage);
  this.load.spritesheet("player", playerImage, {
    frameWidth : 32,
    frameHeight : 32,
  });
  this.load.image("map", mapImage)
  this.load.image("redSquare", carreImage)

}
