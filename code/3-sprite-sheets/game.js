import { PlayScene } from "./PlayScene.js"

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 750,
  backgroundColor: "#C0D470",
  parent: "game",
  scene: [PlayScene],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    }
  }
}

const game = new Phaser.Game(config)