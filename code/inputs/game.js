import { PlayScene } from "./PlayScene.js"

const config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 800,
  backgroundColor: "#cccccc",
  parent: "game",
  scene: [PlayScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  }
}

const game = new Phaser.Game(config)