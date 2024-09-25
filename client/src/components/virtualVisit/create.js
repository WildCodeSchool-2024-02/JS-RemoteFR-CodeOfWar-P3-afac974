export default function create(setMessage, artworks) {
  this.player = this.physics.add.sprite(400, 170, "player");

  // Variables pour définir l'espacement et la grille des tableaux
  const startX = 100;
  const startY = 90;
  const spaceX = 200;
  const spaceY = 200;
  let currentRow = 0;
  let currentCol = 0;

  this.tableauxPositions = [];

  artworks.forEach((artwork, index) => {

    const x = startX + currentCol * spaceX;
    const y = startY + currentRow * spaceY;

    const group = this.physics.add.staticGroup();
    group.create(x, y, "frame");

    this.physics.add.collider(this.player, group, () => {
      setMessage(index);
    });

    this.tableauxPositions.push({ x, y });
    
    // Ajuster la colonne et la ligne pour la prochaine itération
    currentCol+=1;
    if (currentCol > 3) { 
      currentCol = 0;
      currentRow+=1;
    }
  });

  this.cursors = this.input.keyboard.createCursorKeys();
}