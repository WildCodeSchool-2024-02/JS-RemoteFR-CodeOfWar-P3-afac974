import Phaser from "phaser";

export default function playerMove(setMessage, message) {
  // Gestion des déplacements
  this.player.setVelocity(0);

  if (this.cursors.left.isDown && this.player.x > 32) {
    this.player.setVelocityX(-160);
    this.player.anims.play("walk_left", true);
  } else if (this.cursors.right.isDown && this.player.x < 928) {
    this.player.setVelocityX(160);
    this.player.anims.play("walk_right", true);
  }

  if (this.cursors.up.isDown && this.player.y > 19) {
    this.player.setVelocityY(-160);
    this.player.anims.play("walk_up", true);
  } else if (this.cursors.down.isDown && this.player.y < 250) {
    this.player.setVelocityY(160);
    this.player.anims.play("walk_down", true);
  }

  if (
    !this.cursors.left.isDown &&
    !this.cursors.right.isDown &&
    !this.cursors.up.isDown &&
    !this.cursors.down.isDown
  ) {
    this.player.setVelocity(0);
  }

  // Interaction avec la distance des tableaux
  const thresholdDistance = 40; // Distance à laquelle le message doit être réinitialisé
  let isNearAnyTableau = false;

  this.tableauxPositions.forEach((tableauPos) => {
    const distance = Phaser.Math.Distance.Between(
      this.player.x,
      this.player.y,
      tableauPos.x,
      tableauPos.y
    );

    if (distance < thresholdDistance) {
      isNearAnyTableau = true;
    }
  });

  // Si le joueur n'est proche d'aucun tableau, réinitialiser le message
  if (!isNearAnyTableau && message !== null) {
    setMessage(null);
  }
}
