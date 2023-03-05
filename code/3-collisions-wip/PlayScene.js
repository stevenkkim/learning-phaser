export class PlayScene extends Phaser.Scene {
    constructor() {
        super('PlayScene')
        this.player;
        this.player2;
        this.keys;
        this.walls = [];
        this.wallsGroup;
    }

    preload() {
        this.load.image('background', '../../assets/background.jpg');
        this.load.image('cat', '../../assets/cat.png');
    }

    create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.keys = this.input.keyboard.addKeys('LEFT,RIGHT,UP,DOWN')

        this.player = this.physics.add.sprite(1100, 450, 'cat')
            .setScale(.05)
            //.setCollideWorldBounds(true)
            .setSize(500,500)
            // .setCircle(300)
            .setOffset(120, 150)
            // .setFriction(.5)
            // .setBounce(1, 1)



        // this.walls.push(
        //     this.physics.add.existing(
        //         this.add.rectangle(0, 355, 320, 160, 0x000000, 0.2).setOrigin(0)
        //     )
        // );
        // this.walls.push(
        //     this.physics.add.existing(
        //         this.add.rectangle(315, 200, 250, 160, 0x000000, 0.2).setOrigin(0)
        //     )
        // );
        // this.walls[0].body.setImmovable(true);
        // this.walls[1].body.setImmovable(true);


// 
        // this.player2 = this.physics.add.sprite(600, 300, 'cat')
        //     .setScale(.05)
        //     //.setCollideWorldBounds(true)
        //     .setImmovable(false)
        //     .setCircle(300)
        //     .setOffset(120, 150)
        //     .setBounce(2, 2)
// 
        // this.player2.body.setMaxSpeed(500)

        // this.physics.add.collider(this.player, this.player2, () => { console.log('hello') }, null, this)
        // this.physics.add.collider(this.player, this.walls, () => { console.log('hello') }, null, this)
        // this.physics.add.collider(this.player2, this.walls, () => { console.log('hello') }, null, this)

    }

    update() {
        const speed = 300;
        let playerVelocity = new Phaser.Math.Vector2();
        if (this.keys.LEFT.isDown) {
            playerVelocity.x = -1;
        } else if (this.keys.RIGHT.isDown) {
            playerVelocity.x = 1;
        }
        if (this.keys.UP.isDown) {
            playerVelocity.y = -1;
        } else if (this.keys.DOWN.isDown) {
            playerVelocity.y = 1;
        }
        playerVelocity.normalize();
        playerVelocity.scale(speed);

        this.player.body.setVelocity(playerVelocity.x, playerVelocity.y);

    }

}
