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
        this.load.setPath('../../assets/sprout-lands/');

        /* https://newdocs.phaser.io/docs/3.54.0/focus/Phaser.Loader.LoaderPlugin-spritesheet
        spritesheet(key, [url], [frameConfig], [xhrSettings])
        frameConfig: object {
            frameWidth: number		        The width of the frame in pixels.
            frameHeight: number	<optional>	The height of the frame in pixels. Uses the frameWidth value if not provided.
            startFrame: number	<optional>	The first frame to start parsing from.
            endFrame: number	<optional>	The frame to stop parsing at. If not provided it will calculate the value based on the image and frame dimensions.
            margin: number	    <optional>	The margin in the image. This is the space around the edge of the frames.
            spacing: number	    <optional>	The spacing between each frame in the image.
        }
        */
        this.load.image('grass', '/tilesets/grass.png');
        this.load.spritesheet('grass-ss', '/tilesets/grass.png', { frameWidth: 48, frameHeight: 48 });
        // this.load.image('grass', '/tilesets/grass.png');

        this.load.spritesheet('player', '/characters/player.png', { frameWidth: 48, frameHeight: 48 });
        // this.load.image('player', '/characters/player.png');

        this.load.setPath('../../assets/');
        this.load.image('cat', 'cat.png');
    }

    create() {

        console.log(this)

        this.add.image(0, 0, 'grass').setOrigin(0, 0).setScale(2).setCrop(0, 0, 50, 50);
        this.add.image(0, 0, 'grass-ss',).setOrigin(0, 0).setScale(2);


        this.add.tileSprite()
        this.keys = this.input.keyboard.addKeys('LEFT,RIGHT,UP,DOWN')


        this.player = this.physics.add.sprite(800, 450, 'player',)
            .setScale(2)
            .setCollideWorldBounds(true)
            // .setSize(500,500)
            // .setCircle(10)
            // .setOffset(120, 150)
            // .setFriction(.5)
            .setBounce(1, 1)
            .setCrop()

        const frameRate = 4;

        this.anims.create({
            key: 'down-idle',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 1 }),
            frameRate,
            repeat: -1,
        })
        this.anims.create({
            key: 'down-walk',
            frames: this.anims.generateFrameNumbers('player', { start: 2, end: 3 }),
            frameRate,
            repeat: -1,
        })
        this.anims.create({
            key: 'up-idle',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 5 }),
            frameRate,
            repeat: -1,
        })
        this.anims.create({
            key: 'up-walk',
            frames: this.anims.generateFrameNumbers('player', { start: 6, end: 7 }),
            frameRate,
            repeat: -1,
        })
        this.anims.create({
            key: 'left-idle',
            frames: this.anims.generateFrameNumbers('player', { start: 8, end: 9 }),
            frameRate,
            repeat: -1,
        })
        this.anims.create({
            key: 'left-walk',
            frames: this.anims.generateFrameNumbers('player', { start: 10, end: 11 }),
            frameRate,
            repeat: -1,
        })
        this.anims.create({
            key: 'right-idle',
            frames: this.anims.generateFrameNumbers('player', { start: 12, end: 13 }),
            frameRate,
            repeat: -1,
        })
        this.anims.create({
            key: 'right-walk',
            frames: this.anims.generateFrameNumbers('player', { start: 14, end: 15 }),
            frameRate,
            repeat: -1,
        })
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 0 }),
            frameRate,
            repeat: -1,
        })


        this.player.anims.play('down-idle')

        // this.player.setImmovable(true);

        this.player.setInteractive();

        this.input.setDraggable(this.player);
        // https://newdocs.phaser.io/docs/3.55.2/Phaser.Input.Events
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            console.log('drag')
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
        this.input.on('dragend', function (pointer, gameObject, dragX, dragY) {
            console.log(`dragend: { x: ${gameObject.x}, y: ${gameObject.y}}`);
        });



        this.cat = this.physics.add.sprite(700, 500, 'cat')
            .setScale(.05)
            .setCollideWorldBounds(true)
            // .setImmovable(true)
            .setCircle(300)
            .setOffset(120, 150)
            .setBounce(1)

        this.catCircle = this.physics.add.sprite(690, 500, 'cat')
            .setScale(.05)
            // .setCollideWorldBounds(true)
            // .setImmovable(true)
            .setCircle(900)
            .setOffset(-450, -450)
            .setAlpha(0)

        this.circle = this.physics.add.existing(this.add.circle(200, 200, 80, 0x6666ff))




        this.physics.add.overlap(this.player, this.catCircle, () => { console.log('circle') }, null, this)

        /*
        this.cat.setInteractive().on('pointerdown', function () {
            if (this.scene.scale.isFullscreen) {
                this.scene.scale.stopFullscreen();
                // On stop fulll screen
            } else {
                this.scene.scale.startFullscreen();
                // On start fulll screen
            }
        });
        */




        this.bodyData = this.add.text(10, 10, "", { fontSize: '14px', fontFamily: 'Courier', color: '#000' });

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

        //for (let i = 0; i < 5; i++) {
        //    this.kitties[i] = this.physics.add.sprite(1200 * Math.random(), 800 * Math.random(), 'cat')
        //        .setScale(.05)
        //        .setCollideWorldBounds(true)
        //        .setImmovable(true)
        //        .setCircle(300)
        //        .setOffset(120, 150)
        //        .setBounce(2, 2)
        //
        //    this.kitties[i].body.setMaxSpeed(500)
        //}



        this.physics.add.collider(this.player, this.cat, () => { console.log('hello') }, null, this)
        // this.physics.add.overlap(this.player, this.cat, () => { console.log('hello') }, null, this);


        this.physics.add.collider(this.player, this.walls, () => { console.log('hello') }, null, this)
        this.physics.add.collider(this.kitties, this.player, () => { console.log('hello') }, null, this)
        this.physics.add.collider(this.kitties, this.walls, () => { console.log('hello') }, null, this)
        this.physics.add.collider(this.kitties, this.kitties, () => { console.log('hello') }, null, this)
    }

    update() {
        const body = {
            blocked: this.player.body.blocked,
            overlapR: this.player.body.overlapR,
            overlapX: this.player.body.overlapX,
            overlapY: this.player.body.overlapY,
            touching: this.player.body.touching,
            wasTouching: this.player.body.wasTouching,
        }

        // this.bodyData.text = JSON.stringify(body, null, 2);
        this.bodyData.setText(JSON.stringify(body, null, 2));

        const VELOCITY = 250;
        if (this.keys.LEFT.isDown && this.keys.RIGHT.isDown) {
            this.player.body.velocity.x = 0;
            // this.player.x -= 10;
        }
        else if (this.keys.LEFT.isDown) {
            // this.player.body.velocity.x = -VELOCITY;
            this.player.setVelocityX(-VELOCITY);
            this.player.anims.play('left-walk', true)
            // this.player.x -= 10;
        }
        else if (this.keys.RIGHT.isDown) {
            // this.player.body.velocity.x = VELOCITY;
            this.player.setVelocityX(VELOCITY);
            this.player.anims.play('right-walk', true)
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
            this.player.body.velocity.y = -VELOCITY;
            this.player.anims.play('up-walk', true)
            // this.player.y -= 10;
        }
        else if (this.keys.DOWN.isDown) {
            this.player.body.velocity.y = VELOCITY;
            this.player.anims.play('down-walk', true)
            // this.player.y += 10;
        }
        else {
            this.player.body.velocity.y = 0;
        }

        if (this.player.body.velocity.x === 0 && this.player.body.velocity.y === 0) {
            this.player.anims.play('idle', true)
        }

        this.catCircle.body.x = this.cat.body.x
        this.catCircle.body.y = this.cat.body.y


        // if (Phaser.Input.Keyboard.JustDown(this.keys.UP)) this.player.anims.play('up-walk')
        // else if (Phaser.Input.Keyboard.JustUp(this.keys.UP)) this.player.anims.play('up-idle')
        // else if (Phaser.Input.Keyboard.JustDown(this.keys.DOWN)) this.player.anims.play('down-walk')
        // else if (Phaser.Input.Keyboard.JustUp(this.keys.DOWN)) this.player.anims.play('down-idle')
        // if (Phaser.Input.Keyboard.JustDown(this.keys.LEFT)) this.player.anims.play('left-walk')
        // else if (Phaser.Input.Keyboard.JustUp(this.keys.LEFT)) this.player.anims.play('left-idle')
        // else if (Phaser.Input.Keyboard.JustDown(this.keys.RIGHT)) this.player.anims.play('right-walk')
        // else if (Phaser.Input.Keyboard.JustUp(this.keys.RIGHT)) this.player.anims.play('right-idle')

        // this.player.body.velocity.x *= 0.96;
        // this.player.body.velocity.y *= 0.96;

    }

}
