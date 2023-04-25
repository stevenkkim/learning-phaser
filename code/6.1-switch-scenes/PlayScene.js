let player;
let keys;

export class PlayScene extends Phaser.Scene {
    constructor() {
        super('PlayScene');
        this.walls = [];
    }

    init(props) {
        this.currentMap = props.map || 1;
        this.startingX = props.startingX || 400;
        this.startingY = props.startingY || 300;
    }

    preload() {
        this.load.setPath('./assets')
        this.load.image('cat', 'cat-down-idle-1.png');
        this.load.image('red-mushrooms');
        this.load.image('thin-tree');
        this.load.image('fat-tree');
    }

    create() {
        console.log("this.currentMap:", this.currentMap);
        keys = this.input.keyboard.addKeys('LEFT,RIGHT,UP,DOWN')

        if (this.currentMap === 1) {
            this.cameras.main.setBackgroundColor(0x7cd95d);
            this.player = this.physics.add.sprite(this.startingX, this.startingY, 'cat').setScale(3);
            this.add.sprite(400, 450, 'thin-tree').setScale(3);
            this.add.sprite(200, 250, 'thin-tree').setScale(3);
            this.add.sprite(700, 150, 'thin-tree').setScale(3);
        }
        if (this.currentMap === 2) {
            this.cameras.main.setBackgroundColor(0x5ea871);
            this.player = this.physics.add.sprite(this.startingX, this.startingY, 'cat').setScale(3);
            this.add.sprite(600, 150, 'fat-tree').setScale(3);
            this.add.sprite(250, 350, 'fat-tree').setScale(3);
            this.add.sprite(100, 150, 'fat-tree').setScale(3);
        }
        if (this.currentMap === 3) {
            this.cameras.main.setBackgroundColor(0x88db9d);
            this.player = this.physics.add.sprite(this.startingX, this.startingY, 'cat').setScale(3);
            this.add.sprite(100, 150, 'red-mushrooms').setScale(3);
            this.add.sprite(400, 350, 'red-mushrooms').setScale(3);
            this.add.sprite(750, 250, 'red-mushrooms').setScale(3);
        }

        this.player.setCollideWorldBounds(true);

    }

    update() {
        if (this.player.x > 780 && this.currentMap < 3) {
            this.scene.restart({
                map: this.currentMap + 1,
                startingX: 25,
                startingY: this.player.y
            })
        }
        if (this.player.x < 20 && this.currentMap > 1) {
            this.scene.restart({
                map: this.currentMap - 1,
                startingX: 775,
                startingY: this.player.y
            })
        }

        if (keys.LEFT.isDown) {
            this.player.x -= 10;
        }
        if (keys.RIGHT.isDown) {
            this.player.x += 10;
        }
        if (keys.UP.isDown) {
            this.player.y -= 10;
        }
        if (keys.DOWN.isDown) {
            this.player.y += 10;
        }
    }

}
