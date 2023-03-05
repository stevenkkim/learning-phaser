let player;
let player2;
let keys;
let wall;

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
        player.setCollideWorldBounds(true);
        keys = this.input.keyboard.addKeys('LEFT,RIGHT,UP,DOWN')

        wall = this.physics.add.existing(
            this.add.rectangle(0, 355, 320, 160, 0x000000, 0.2).setOrigin(0)
        );
        wall.body.setImmovable(true);


        // player.setSize(500,500)
        player.setCircle(300)
        //player.setSize(300, 300)
        player.setOffset(-300,0)
        // player.setFriction(.5)
        player.setBounce(1,1)
        
        player2 = this.physics.add.sprite(600, 300, 'cat').setScale(.05).setCollideWorldBounds(true).setImmovable(false);
        player2.setCircle(300)
        player2.setBounce(2,2)
        player2.body.setMaxSpeed(500)
        

        this.physics.add.collider(player, player2, () => { console.log('hello') }, null, this)
        this.physics.add.collider(player, wall, () => { console.log('hello') }, null, this)
        this.physics.add.collider(player2, wall, () => { console.log('hello') }, null, this)

    }

    update() {
        if (keys.LEFT.isDown) {
            player.body.velocity.x = -300;
            // player.x -= 10;
        }
        else if (keys.RIGHT.isDown) {
            player.body.velocity.x = 300;
            // player.x += 10;
        }
        else {
            player.body.velocity.x = 0;
        }


        if (keys.UP.isDown) {
            player.body.velocity.y = -300;
            // player.y -= 10;
        }
        else if (keys.DOWN.isDown) {
            player.body.velocity.y = 300;
            // player.y += 10;
        }
        else {
            player.body.velocity.y = 0;
        }

        player2.body.velocity.x *= 0.96; 
        player2.body.velocity.y *= 0.96; 


    }

}
