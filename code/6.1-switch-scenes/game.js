import { PlayScene } from "./PlayScene.js"

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#cccccc",
  parent: "game",
  scene: [PlayScene],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  }
}

const game = new Phaser.Game(config)