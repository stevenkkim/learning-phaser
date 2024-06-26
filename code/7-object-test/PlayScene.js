const Scene = new Phaser.Scene('PlayScene');

let player;
let keys;

const load = Scene.load;

Scene.preload = () => {
  Scene.load.setPath('../../assets');
  Scene.load.image('background', '../assets/background.jpg');
  Scene.load.image('cat', '../assets/cat.png');
}

Scene.create = () => {
  Scene.add.image(0, 0, 'background').setOrigin(0, 0);
  player = Scene.physics.add.sprite(800, 450, 'cat').setScale(.05);
  keys = Scene.input.keyboard.addKeys('LEFT,RIGHT,UP,DOWN')
}

Scene.update = () => {
  if (keys.LEFT.isDown) {
    player.x -= 10;
  }
  if (keys.RIGHT.isDown) {
    player.x += 10;
  }
  if (keys.UP.isDown) {
    player.y -= 10;
  }
  if (keys.DOWN.isDown) {
    player.y += 10;
  }
}

export { Scene as PlayScene };


export class PlayScene2 extends Phaser.Scene {
  constructor() {
    super('PlayScene')
  }

  preload() {
    this.load.setPath('../../assets');
    this.load.image('background', '../assets/background.jpg');
    this.load.image('cat', '../assets/cat.png');
  }

  create() {
    this.add.image(0, 0, 'background').setOrigin(0, 0);
    player = this.physics.add.sprite(800, 450, 'cat').setScale(.05);
    keys = this.input.keyboard.addKeys('LEFT,RIGHT,UP,DOWN')
  }

  update() {
    if (keys.LEFT.isDown) {
      player.x -= 10;
    }
    if (keys.RIGHT.isDown) {
      player.x += 10;
    }
    if (keys.UP.isDown) {
      player.y -= 10;
    }
    if (keys.DOWN.isDown) {
      player.y += 10;
    }
  }

}
