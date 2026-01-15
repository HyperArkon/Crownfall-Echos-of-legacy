let game;

function startNewGame() {
  document.getElementById("menu-container").style.display = "none";

  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 450,
    backgroundColor: "#000000",
    parent: document.body,
    scene: [MainScene]
  };

  game = new Phaser.Game(config);
}

/* -------------------- */
/* Main Game Scene      */
/* -------------------- */

class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    // Later: load images, sprites, music
  }

  create() {
    this.add.text(400, 225,
      "Welcome to Crownfall\n\nYour journey begins...",
      {
        fontSize: "24px",
        color: "#f0e6d2",
        align: "center"
      }
    ).setOrigin(0.5);
  }

  update() {
    // Game loop (movement, logic)
  }
}
