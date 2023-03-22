# Phaser Learning

### Code

```js
Scene
  .load
    .image(key, url)
  .add
    .text(x: number, y: number, text: string | string[], style?: {})
    .image(x, y, key)
  .physics
    .add

.setOrigin(x?, y?) // range 0 to 1
.setScale(x?, y?)
.setInteractive(hitArea?, callback?, dropZone?)
```


### Phaser Inputs
```js
// Mouse:
Phaser.Scene.input.on('pointerdown', callback);
  // Mouse events:
  // pointerdown
  // pointerdownoutside
  // pointerup
  // pointerupoutside
  // pointermove
  // pointerover
  // pointerout
  // wheel

// Keyboard:
// https://photonstorm.github.io/phaser3-docs/Phaser.Input.Keyboard.KeyboardPlugin.html 

// Using callbacks
Phaser.Scene.input.keyboard
  .on('keydown', callback, context)
  .on('keydown-A', callback, context)
  .addCapture(keycode) // Prevents keypress event from bubbling (e.g. for space or arrow keys)

// Using addKeys
const keys = this.input.keyboard.addKeys('LEFT,RIGHT,UP,DOWN');
if (keys.RIGHT.isDown) { ... }
```

### Misc
- Full screen game: https://www.emanueleferonato.com/2019/02/06/give-your-html5-games-a-full-screen-option-and-manage-game-scaling-and-resizing-in-a-couple-of-lines-of-code-thanks-to-phaser-3-version-3-16/


### Phaser Collisions
```js

```

### Resources
- https://github.com/yandeu/phaser-project-template
- https://github.com/digitsensitive/phaser3-typescript
  - Includes a number of games including flappy bird, candy crush, breakout etc.

### Flappy Bird examples
- https://github.com/IgorRozani/flappy-bird
- https://github.com/raychenfj/phaser-flappy-bird


Arcade vs. Matter
Arcade is a custom physics engine for Phaser; handles basic physics with axis-aligned (not rotated) rectagles and circles... no slopes. Matter is for more complex shapes and "realistic" physics.
https://itnext.io/modular-game-worlds-in-phaser-3-tilemaps-4-meet-matter-js-abf4dfa65ca1
https://www.html5gamedevs.com/topic/37762-physics-arcade-vs-impact-vs-matter/
https://phaser.discourse.group/t/arcade-vs-matterjs-performance/7218
https://www.reddit.com/r/phaser/comments/d87kni/differences_between_arcade_impact_and_matter/



### Sprite sheets
Phaser has support for two types of sprite sheet: "classic" ones, where every frame is the exact same size, and "texture atlases" which are created with the help of a third party app like Texture Packer, Shoebox or Flash CC and come with an associated json file.
https://gamedev.stackexchange.com/questions/86868/displaying-a-particular-sprite-from-spritesheet-using-phaser

```js
this.load.spritesheet('grass', '/tilesets/grass.png', { frameWidth: 48, frameHeight: 48 });
this.add.image(0, 0, 'grass').setOrigin(0, 0).setScale(2).setCrop(0, 0, 50, 50);
this.add.image(0, 0, 'grass', frame).setOrigin(0, 0).setScale(2);

.setCrop
```

https://newdocs.phaser.io/docs/3.54.0/focus/Phaser.Loader.LoaderPlugin-spritesheet
spritesheet(key, [url], [frameConfig], [xhrSettings])
frameConfig: object {
    frameWidth: number		        The width of the frame in pixels.
    frameHeight: number	<optional>	The height of the frame in pixels. Uses the frameWidth value if not provided.
    startFrame: number	<optional>	The first frame to start parsing from.
    endFrame: number	<optional>	The frame to stop parsing at. If not provided it will calculate the value based on the image and frame dimensions.
    margin: number	    <optional>	The margin in the image. This is the space around the edge of the frames.
    spacing: number	    <optional>	The spacing between each frame in the image.
}


### Animations
https://phaser.io/examples/v3/category/animation

Animating sprites with arrow keys?
https://stackoverflow.com/questions/58829692/how-to-only-play-animation-while-a-sprite-is-moving-in-phaser-3
Several approaches:
1. this.player.anims.play('right-walk', true) // set ignoreIfPlaying = true to prevent restart of animation
2. Phaser.Input.Keyboard.JustDown(this.keys.UP) and .JustUp
3. this.arrowKeys.right._justDown (does this still work?)

How to animate individual images (instead of sprite sheet)?


### Conditional Collisions
Phaser.Physics.Arcade.Body
https://newdocs.phaser.io/docs/3.54.0/Phaser.Physics.Arcade.Body



### Text
https://rexrainbow.github.io/phaser3-rex-notes/docs/site/text/


### Full Screen?
https://rexrainbow.github.io/phaser3-rex-notes/docs/site/fullscreen/
```js
gameObject.setInteractive().on('pointerdown', function() {
    if (scene.scale.isFullscreen) {
        scene.scale.stopFullscreen();
        // On stop fulll screen
    } else {
        scene.scale.startFullscreen();
        // On start fulll screen
    }
});
```

### Zones
https://phaser.io/examples/v3/category/input/zones
https://www.html5gamedevs.com/topic/38895-making-a-zone/


Todo:
https://phaser.discourse.group/t/more-information-about-sprite-body-touching/961

Look into dynamic vs static bodies

body.onFloor()
body.blocked.down

https://www.codecademy.com/learn/learn-phaser

https://blog.ourcade.co/posts/2020/phaser3-detect-overlap-sprites-selection-box/

https://phaser.discourse.group/t/check-collision-overlap-between-sprites-without-physics/6696
Phaser.Geom.Intersects
```js
function checkOverlap(spriteA, spriteB) {
  var boundsA = spriteA.getBounds();
  var boundsB = spriteB.getBounds();
  return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
}
```

https://phaser.discourse.group/t/detect-overlap-with-bottom-of-sprite/10932/3
https://www.html5gamedevs.com/topic/41438-using-an-overlap-collision-triggering-things-on-and-off/


Creating a "bullet" class: https://stackoverflow.com/questions/72925749/add-a-animated-sprite-to-phaser-objects


// makePixelPerfect
this.add.sprite(x, y, key).setInteractive(this.input.makePixelPerfect());