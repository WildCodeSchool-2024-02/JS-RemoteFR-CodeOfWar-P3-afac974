export default function create(setMessage, artworks) {
  this.map = this.add.image(760, 225, "map");
  this.player = this.physics.add.sprite(700, 232, "player");
  this.player.setScale(1);

  this.add.rectangle(1250, 200, 500, 300, 0x000000, 0.2);
  this.add.text(1250, 75, 'Tutoriel', { 
    fontSize: '32px', 
    fill: '#ffffff' 
}).setOrigin(0.5);

// Ajouter le texte du tutoriel
const fleches = this.add.image(1045, 170, 'fleches');
fleches.setScale(0.1);

this.add.text(1050, 125, 
    'Touches :\n' +
    '  Flèches directionnelles :\n'+
    ' Se déplacer\n',
    { 
        fontSize: '24px', 
        fill: '#ffffff',
        lineSpacing: 10
    }
);
   // Ajouter l'image du tutoriel
   this.add.image(1045, 255, 'frame');

   this.add.text(1060, 245, 
    'Approché vous des tableaux \n' +
    'pour admirer et avoir les \n'+
    'informations',
    { 
        fontSize: '24px', 
        fill: '#ffffff',
        lineSpacing: 10
    }
);

  // Créer les animations pour le joueur
  this.anims.create({
    key: "walk_down",
    frames: this.anims.generateFrameNumbers("player", { start: 66, end: 71 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "walk_up",
    frames: this.anims.generateFrameNumbers("player", { start: 54, end: 59 }), // Frames 4 à 7 pour marcher vers le haut
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "walk_left",
    frames: this.anims.generateFrameNumbers("player", { start: 60, end: 65 }), // Frames 8 à 11 pour marcher à gauche
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "walk_right",
    frames: this.anims.generateFrameNumbers("player", { start: 48, end: 53 }), 
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "idle",
    frames: this.anims.generateFrameNumbers("player", { start: 144, end: 152 }),
    frameRate: 6,
    repeat: -1,
  });

  // Par défaut, faire jouer l'animation "idle"
  this.player.play("idle");

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
  const totalElements = 24;
  let totalPlaced = artworks.length;

  const randomAssets = ['plant1', 'plant2','plant3', 'plant4']

  while (totalPlaced < totalElements) {
    const x = startX + currentCol * spaceX;
    const y = startY + currentRow * spaceY +8;

    const group = this.physics.add.staticGroup();
    // Choisir un asset aléatoire
    const randomAsset = randomAssets[Math.floor(Math.random() * randomAssets.length)];
    group.create(x, y, randomAsset);

    this.physics.add.overlap(this.player, group, () => {});

    this.tableauxPositions.push({ x, y });

    currentCol += 1;
    if (currentCol > 13) {
      currentCol = 0;
      currentRow += 1;
    }

    totalPlaced += 1;
  }
  this.player.setDepth(2);
  // Ajouter un mur (groupe statique) en bas de la carte (invisible)
  const invisibleWalls = this.physics.add.staticGroup();

  // Exemples de murs invisibles (bordures)
  invisibleWalls.create(0, 20, null).setSize(1920, 16).setVisible(false); // Mur haut
  invisibleWalls.create(0, 125, null).setSize(510, 30).setVisible(false); // Mur bas/gauche
  invisibleWalls.create(480, 125, null).setSize(380, 30).setVisible(false); // Mur bas/millieu
  invisibleWalls.create(950, 150, null).setSize(16, 270).setVisible(false); // Mur droite
  invisibleWalls.create(8, 150, null).setSize(16, 270).setVisible(false); // Mur droite
  invisibleWalls.create(300, 275, null).setSize(590, 16).setVisible(false); // Mur bas/gauche
  invisibleWalls.create(810, 275, null).setSize(300, 16).setVisible(false); // Mur bas/gauche

  const easterEggGroup = this.physics.add.staticGroup();

  // Positionner le bloc invisible quelque part dans la scène (par exemple à x: 1200, y: 300)
  const easterEggBlock = easterEggGroup.create(750, 40, null).setSize(32, 32).setVisible(false);

  // Ajouter une détection de collision entre le joueur et ce bloc invisible
  this.physics.add.overlap(this.player, easterEggBlock, () => {
    setMessage("easterEgg");
  });


  // Collisions entre le joueur et les murs invisibles
  this.physics.add.collider(this.player, invisibleWalls);

  this.cursors = this.input.keyboard.createCursorKeys();

  
}
