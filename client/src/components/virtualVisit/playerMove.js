import Phaser from "phaser";

export default function playerMove(setMessage) {

  // Gestion des déplacements

  this.player.setVelocity(0);

  if (this.cursors.left.isDown && this.player.x > 20) {
    this.player.setVelocityX(-160);
  }

  else if (this.cursors.right.isDown && this.player.x < 780) {
    this.player.setVelocityX(160);
  }


  if (this.cursors.up.isDown && this.player.y > 20) {
    this.player.setVelocityY(-160);
  }

  else if (this.cursors.down.isDown && this.player.y < 780) {

    this.player.setVelocityY(160);
  }


  if (
    !this.cursors.left.isDown &&
    !this.cursors.right.isDown &&
    !this.cursors.up.isDown &&
    !this.cursors.down.isDown
  ) {
    this.player.setVelocity(0);
  }


  // Interaction avec la distance du tableau
  const distanceToTableau1 = Phaser.Math.Distance.Between(
    this.player.x,
    this.player.y,
    100,
    90
  );
  const distanceToTableau2 = Phaser.Math.Distance.Between(
    this.player.x,
    this.player.y,
    300,
    90
  );
  const distanceToTableau3 = Phaser.Math.Distance.Between(
    this.player.x,
    this.player.y,
    500,
    90
  );

  const thresholdDistance = 50; // Distance à laquelle le message doit être réinitialisé

  if (
    distanceToTableau1 > thresholdDistance &&
    distanceToTableau2 > thresholdDistance &&
    distanceToTableau3 > thresholdDistance
  ) {
    setMessage(null);
  }
}