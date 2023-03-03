let player;
let keys;

export class PlayScene extends Phaser.Scene {
    constructor() {
        super('PlayScene')
    }

    preload() {
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
