export default function create(setMessage, artworks) {

  this.map = this.add.image(480, 142, 'map');
  this.player = this.physics.add.sprite(700, 32, "player");

  // Variables pour définir l'espacement et la grille des tableaux
  const startX = 48;
  const startY = 32;
  const spaceX = 64;
  const spaceY = 110;
  let currentRow = 0;
  let currentCol = 0;

  this.tableauxPositions = [];

  artworks.forEach((artwork, index) => {
    const x = startX + currentCol * spaceX;
    const y = startY + currentRow * spaceY;

    const group = this.physics.add.staticGroup();
    group.create(x, y, "frame");

    this.physics.add.overlap(this.player, group, () => {
      setMessage(index);
    });

    this.tableauxPositions.push({ x, y });

    // Ajuster la colonne et la ligne pour la prochaine itération
    currentCol += 1;
    if (currentCol > 9) {
      currentCol = 0;
      currentRow += 1;
    }
  });

  // Compléter jusqu'à 20 éléments
  const totalElements = 20;
  let totalPlaced = artworks.length;

  while (totalPlaced < totalElements) {
    const x = startX + currentCol * spaceX;
    const y = startY + currentRow * spaceY+15;

    const group = this.physics.add.staticGroup();
    group.create(x, y, 'redSquare'); 

    this.physics.add.collider(this.player, group, () => {})

    this.tableauxPositions.push({ x, y });

    currentCol += 1;
    if (currentCol > 9) {
      currentCol = 0;
      currentRow += 1;
    }

    totalPlaced += 1;
  }
  this.player.setDepth(2);
 // Ajouter un mur (groupe statique) en bas de la carte (invisible)
 const invisibleWalls = this.physics.add.staticGroup();

 // Exemples de murs invisibles (bordures)
 invisibleWalls.create(0, 20, null).setSize(2000, 16).setVisible(false); // Mur haut
 invisibleWalls.create(0, 125, null).setSize(1345, 30).setVisible(false); // Mur bas

 // Collisions entre le joueur et les murs invisibles
 this.physics.add.collider(this.player, invisibleWalls);
  
  this.cursors = this.input.keyboard.createCursorKeys();
}