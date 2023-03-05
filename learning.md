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
