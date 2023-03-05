export class PlayScene extends Phaser.Scene {
    constructor() {
        super('PlayScene')
        this.player;
        this.player2;
        this.keys;
        this.walls = [];
        this.wallsGroup;
        this.kitties = [];
    }

    preload() {
        this.load.image('background', '../../assets/background.jpg');
        this.load.image('cat', '../../assets/cat.png');
    }

    create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.keys = this.input.keyboard.addKeys('LEFT,RIGHT,UP,DOWN')

        this.player = this.physics.add.sprite(800, 450, 'cat')
            .setScale(.05)
            .setCollideWorldBounds(true)
            // .setSize(500,500)
            .setCircle(300)
            .setOffset(120, 150)
            // .setFriction(.5)
            .setBounce(1, 1)


        this.walls.push(
            this.physics.add.existing(
                this.add.rectangle(0, 355, 320, 160, 0x000000, 0.2).setOrigin(0)
            )
        );
        this.walls.push(
            this.physics.add.existing(
                this.add.rectangle(315, 200, 250, 160, 0x000000, 0.2).setOrigin(0)
            )
        );
        this.walls[0].body.setImmovable(true);
        this.walls[1].body.setImmovable(true);

        for (let i = 0; i < 100; i++) {
            this.kittiest[i] = this.physics.add.sprite(1200 * Math.random(), 800 * Math.random(), 'cat')
                .setScale(.05)
                .setCollideWorldBounds(true)
                .setImmovable(false)
                .setCircle(300)
                .setOffset(120, 150)
                .setBounce(2, 2)

            this.kitties[i].body.setMaxSpeed(500)
        }



        this.physics.add.collider(this.player, this.walls, () => { console.log('hello') }, null, this)
        this.physics.add.collider(this.kitties, this.player, () => { console.log('hello') }, null, this)
        this.physics.add.collider(this.kitties, this.walls, () => { console.log('hello') }, null, this)
        this.physics.add.collider(this.kitties, this.kitties, () => { console.log('hello') }, null, this)
    }

    update() {
        if (this.keys.LEFT.isDown && this.keys.RIGHT.isDown) {
            this.player.body.velocity.x = 0;
            // this.player.x -= 10;
        }
        else if (this.keys.LEFT.isDown) {
            this.player.body.velocity.x = -300;
            // this.player.x -= 10;
        }
        else if (this.keys.RIGHT.isDown) {
            this.player.body.velocity.x = 300;
            // this.player.x += 10;
        }
        else {
            this.player.body.velocity.x = 0;
        }


        if (this.keys.UP.isDown && this.keys.DOWN.isDown) {
            this.player.body.velocity.y = 0;
            // this.player.y -= 10;
        }
        else if (this.keys.UP.isDown) {
            this.player.body.velocity.y = -300;
            // this.player.y -= 10;
        }
        else if (this.keys.DOWN.isDown) {
            this.player.body.velocity.y = 300;
            // this.player.y += 10;
        }
        else {
            this.player.body.velocity.y = 0;
        }

        // this.player.body.velocity.x *= 0.96;
        // this.player.body.velocity.y *= 0.96;

    }

}
