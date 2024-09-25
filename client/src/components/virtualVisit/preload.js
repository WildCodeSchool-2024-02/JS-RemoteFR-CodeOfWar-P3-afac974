import playerImage from "../../assets/phaser/player.png";
import frameImage from "../../assets/phaser/Frame.png";

export default function preload() {
  this.load.image("frame", frameImage);
  this.load.image("player", playerImage);
}