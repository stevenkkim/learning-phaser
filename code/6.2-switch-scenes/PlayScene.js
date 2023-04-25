import { LoadMap1 } from "./LoadMap1.js"
import { LoadMap2 } from "./LoadMap2.js";
import { LoadMap3 } from "./LoadMap3.js";

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
            LoadMap1(this);
        }
        if (this.currentMap === 2) {
            LoadMap2(this);
        }
        if (this.currentMap === 3) {
            LoadMap3(this);
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
