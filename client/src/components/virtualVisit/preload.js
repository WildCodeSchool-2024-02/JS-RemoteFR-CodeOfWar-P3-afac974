import playerImage from "../../assets/phaser/Characters_spritesheet.png";
import frameImage from "../../assets/phaser/Frame.png";
import mapImage from "../../assets/phaser/map.png";
import carreImage from "../../assets/phaser/Carrerouge.png";
import plant1 from "../../assets/phaser/plant1.png";
import plant2 from "../../assets/phaser/plant2.png";
import plant3 from "../../assets/phaser/plant3.png";
import plant4 from "../../assets/phaser/plant4.png";
import fleches from "../../assets/phaser/fleches.png"


export default function preload() {
  this.load.image("frame", frameImage);
  this.load.spritesheet("player", playerImage, {
    frameWidth: 16,
    frameHeight: 32,
  });
  this.load.image("map", mapImage);
  this.load.image("redSquare", carreImage);
  this.load.image("plant1", plant1);
  this.load.image("plant2", plant2);
  this.load.image("plant3", plant3);
  this.load.image("plant4", plant4);
  this.load.image("fleches", fleches)
}
