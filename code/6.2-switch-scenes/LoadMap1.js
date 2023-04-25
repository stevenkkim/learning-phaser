
export function LoadMap1(scene) {
  scene.cameras.main.setBackgroundColor(0x7cd95d);
  scene.player = scene.physics.add.sprite(scene.startingX, scene.startingY, 'cat').setScale(3);
  scene.add.sprite(400, 450, 'thin-tree').setScale(3);
  scene.add.sprite(200, 250, 'thin-tree').setScale(3);
  scene.add.sprite(700, 150, 'thin-tree').setScale(3);
}
