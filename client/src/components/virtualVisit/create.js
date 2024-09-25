export default function create(setMessage) {
    this.player = this.physics.add.sprite(400, 170, "player");
  
    this.tableau1 = this.physics.add.staticGroup();
    this.tableau1.create(100, 90, "frame");
  
    this.physics.add.collider(this.player, this.tableau1, () => {
      setMessage(0);
    });
  
    this.tableau2 = this.physics.add.staticGroup();
    this.tableau2.create(300, 90, "frame");
  
    this.physics.add.collider(this.player, this.tableau2, () => {
      setMessage(1);
    });
  
    this.tableau3 = this.physics.add.staticGroup();
    this.tableau3.create(500, 90, "frame");
  
    this.physics.add.collider(this.player, this.tableau3, () => {
      setMessage(2);
    });

  
    this.cursors = this.input.keyboard.createCursorKeys();
  }