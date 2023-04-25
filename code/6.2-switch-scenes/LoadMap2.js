export function LoadMap2(scene) {
  console.log("LoadMap2")
  scene.cameras.main.setBackgroundColor(0x5ea871);
  scene.player = scene.physics.add.sprite(scene.startingX, scene.startingY, 'cat').setScale(3);
  scene.add.sprite(600, 150, 'fat-tree').setScale(3);
  scene.add.sprite(250, 350, 'fat-tree').setScale(3);
  scene.add.sprite(100, 150, 'fat-tree').setScale(3);
}
