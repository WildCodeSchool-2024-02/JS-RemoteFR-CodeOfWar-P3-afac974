// eslint-disable-next-line
import Phaser from "phaser";

export default function playerMove(setMessage, message) {
  // Gestion des déplacements
  this.player.setVelocity(0);

  this.player.setCollideWorldBounds(true);

  let isMoving = false; // Variable pour vérifier si le joueur est en mouvement
  let lastDirection = "down"; // Stocke la dernière direction du joueur

  // Déplacements horizontaux
  if (this.cursors.left.isDown) {
    this.player.setVelocityX(-160);
    this.player.anims.play("walk_left", true);
    lastDirection = "left";
    isMoving = true;
  } else if (this.cursors.right.isDown) {
    this.player.setVelocityX(160);
    this.player.anims.play("walk_right", true);
    lastDirection = "right";
    isMoving = true;
  }

  // Déplacements verticaux
  if (this.cursors.up.isDown) {
    this.player.setVelocityY(-160);
    this.player.anims.play("walk_up", true);
    lastDirection = "up";
    isMoving = true;
  } else if (this.cursors.down.isDown) {
    this.player.setVelocityY(160);
    this.player.anims.play("walk_down", true);
    lastDirection = "down";
    isMoving = true;
  }

  // Si le joueur ne bouge pas, jouer l'animation idle correspondant à la dernière direction
  if (!isMoving) {
    switch (lastDirection) {
      case "left":
        this.player.anims.play("idle", true);
        break;
      case "right":
        this.player.anims.play("idle", true);
        break;
      case "up":
        this.player.anims.play("idle", true);
        break;
      case "down":
      default:
        this.player.anims.play("idle", true);
        break;
    }
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
