export default function create(setMessage, artworks) {
  this.map = this.add.image(480, 142, "map");
  this.player = this.physics.add.sprite(700, 232, "player");
  this.player.setScale(1);

  // Créer les animations pour le joueur
  this.anims.create({
    key: "walk_down",
    frames: this.anims.generateFrameNumbers("player", { start: 0, end: 3 }), // Frames 0 à 3 pour marcher vers le bas
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "walk_up",
    frames: this.anims.generateFrameNumbers("player", { start: 4, end: 7 }), // Frames 4 à 7 pour marcher vers le haut
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "walk_left",
    frames: this.anims.generateFrameNumbers("player", { start: 8, end: 11 }), // Frames 8 à 11 pour marcher à gauche
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "walk_right",
    frames: this.anims.generateFrameNumbers("player", { start: 12, end: 15 }), // Frames 12 à 15 pour marcher à droite
    frameRate: 10,
    repeat: -1,
  });

  // Par défaut, faire jouer l'animation "marcher vers le bas"
  this.player.play("walk_down");

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
    const y = startY + currentRow * spaceY + 15;

    const group = this.physics.add.staticGroup();
    group.create(x, y, "redSquare");

    this.physics.add.collider(this.player, group, () => {});

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
