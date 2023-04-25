export function LoadMap3(scene) {
  scene.cameras.main.setBackgroundColor(0x88db9d);
  scene.player = scene.physics.add.sprite(scene.startingX, scene.startingY, 'cat').setScale(3);
  scene.add.sprite(100, 150, 'red-mushrooms').setScale(3);
  scene.add.sprite(400, 350, 'red-mushrooms').setScale(3);
  scene.add.sprite(750, 250, 'red-mushrooms').setScale(3);
}