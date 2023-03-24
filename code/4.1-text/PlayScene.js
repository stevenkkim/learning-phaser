export class PlayScene extends Phaser.Scene {
    constructor() {
        super('PlayScene')
    }

    preload() {
        this.load.setPath('./assets')
        this.load.image('cat', 'cat-down-idle-1.png');
        this.load.image('cow', 'cow-right-idle.png');
        this.load.image('grass-5');
        this.load.image('grass-6');
        this.load.image('grass-7');
        this.load.image('red-mushroom');
        this.load.image('red-mushrooms');
        this.load.image('thin-tree');
        this.load.image('fat-tree');
    }

    create() {
        this.keys = this.input.keyboard.addKeys('LEFT,RIGHT,UP,DOWN')

        this.overlappingSpriteName = '';

        this.sprites = [
            this.physics.add.image(200, 200, 'grass-5').setScale(3).setName('grass-5'),
            this.physics.add.image(400, 250, 'grass-6').setScale(3).setName('grass-6'),
            this.physics.add.image(600, 150, 'grass-7').setScale(3).setName('grass-7'),
            this.physics.add.image(600, 600, 'grass-5').setScale(3).setName('grass-5'),
            this.physics.add.image(800, 270, 'grass-6').setScale(3).setName('grass-6'),
            this.physics.add.image(970, 400, 'grass-7').setScale(3).setName('grass-7'),
            this.physics.add.image(200, 340, 'red-mushroom').setScale(3).setName('red-mushroom'),
            this.physics.add.image(940, 100, 'red-mushroom').setScale(3).setName('red-mushroom'),
            this.physics.add.image(890, 370, 'red-mushrooms').setScale(3).setName('red-mushrooms'),
            this.physics.add.image(920, 270, 'fat-tree').setScale(3).setName('fat-tree'),
            this.physics.add.image(200, 600, 'fat-tree').setScale(3).setName('fat-tree'),
            this.physics.add.image(300, 500, 'thin-tree').setScale(3).setName('thin-tree'),
            this.physics.add.sprite(500, 450, 'cow')
                .setName('cow')
                .setScale(3)
                .setCollideWorldBounds(true)
                .setSize(27, 18)
                .setCrop(0, 0, 27, 18)
                .setOffset(0)
        ]

        this.cat = this.physics.add.sprite(800, 450, 'cat')
            .setScale(3)
            .setCollideWorldBounds(true)
            .setCircle(8)

        this.rectangle = this.add.rectangle(10, 10, 50, 50, 0x00000, 0.5).setOrigin(0);

        this.txt = this.add.text(10, 10, '', { fontSize: '40px', fontFamily: 'Caveat', align: 'center' })
            .setWordWrapWidth(300)
            .setAlign('left')


        this.physics.add.overlap(
            this.cat,
            this.sprites,
            (obj1, obj2) => { this.overlappingSpriteName = obj2.name; },
            null,
            this,
        )

    }

    update() {
        if (this.keys.LEFT.isDown && this.keys.RIGHT.isDown) {
            this.cat.body.velocity.x = 0;
        }
        else if (this.keys.LEFT.isDown) {
            this.cat.body.velocity.x = -300;
        }
        else if (this.keys.RIGHT.isDown) {
            this.cat.body.velocity.x = 300;
        }
        else {
            this.cat.body.velocity.x = 0;
        }


        if (this.keys.UP.isDown && this.keys.DOWN.isDown) {
            this.cat.body.velocity.y = 0;
        }
        else if (this.keys.UP.isDown) {
            this.cat.body.velocity.y = -300;
        }
        else if (this.keys.DOWN.isDown) {
            this.cat.body.velocity.y = 300;
        }
        else {
            this.cat.body.velocity.y = 0;
        }

        const dialogue = {
            'grass-5': 'Oooh, soft grass!',
            'grass-6': 'I love grass.',
            'grass-7': 'Beautiful, beautiful grass!',
            'grass-5': 'Yay, grass!',
            'grass-6': 'More grass...',
            'grass-7': 'Is this grass?',
            'red-mushroom': 'This mushroom looks delicious, should I eat it?',
            'red-mushroom': 'Red mushrooms are my favorite.',
            'red-mushrooms': 'Wow, sweet mushrooms!',
            'fat-tree': 'Hello tree.',
            'fat-tree': 'I want to climb this tree.',
            'thin-tree': 'This tree is too thin. It needs to grow more. Maybe I should water it?',
            'cow': 'Moooooooooooo?',
        }

        console.log(this.overlappingSpriteName)
        this.txt.text = dialogue[this.overlappingSpriteName];

        if (this.txt.text) {
            this.txt.text += ' ';
            this.txt.x = this.cat.body.x + 70;
            this.txt.y = this.cat.body.y;

            this.rectangle.x = this.txt.x - 10
            this.rectangle.y = this.txt.y - 10
            this.rectangle.width = this.txt.width + 20
            this.rectangle.height = this.txt.height + 20
            this.rectangle.alpha = 1
        }
        else {
            this.rectangle.alpha = 0
        }

        this.overlappingSpriteName = ''

    }

}
