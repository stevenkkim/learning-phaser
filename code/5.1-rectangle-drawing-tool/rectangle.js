export function useRectangleTool(scene) {

  var color = 0xffff00;
  var thickness = 2;
  var alpha = 1;
  var draw = false;

  scene.input.on('pointerdown', function (pointer) {
    console.log('useRectangleTool(): pointerdown');
    draw = true;
  });

  scene.input.on('pointerup', function (pointer) {
    console.log('useRectangleTool(): pointerup');
    draw = false;
    // console.log(pointer.downX, pointer.downY, pointer.x - pointer.downX, pointer.y - pointer.downY)

    let x = Math.min(pointer.x, pointer.downX);
    let width = Math.abs(pointer.x - pointer.downX);
    let y = Math.min(pointer.y, pointer.downY);
    let height = Math.abs(pointer.y - pointer.downY);

    // console.log(pointer.downX, pointer.downY, pointer.x - pointer.downX, pointer.y - pointer.downY);
    // console.log(x, y, width, height)
    console.log(`${x}, ${y}, ${width}, ${height}`)
  });

  var graphics = scene.add.graphics();

  scene.input.on('pointermove', function (pointer) {
    console.log('useRectangleTool(): pointermove');
    if (draw) {
      graphics.clear();
      graphics.lineStyle(thickness, color, alpha);
      graphics.strokeRect(pointer.downX, pointer.downY, pointer.x - pointer.downX, pointer.y - pointer.downY);
    }
  });

  return graphics;
}

















export function createRectangle(scene) {
  scene.input.on('pointerdown', function (pointer) {
    draw = true;

  });

  scene.input.on('pointerup', function (pointer) {
    draw = false;
    // console.log(pointer.downX, pointer.downY, pointer.x - pointer.downX, pointer.y - pointer.downY)

    let x = Math.min(pointer.x, pointer.downX);
    let width = Math.abs(pointer.x - pointer.downX);
    let y = Math.min(pointer.y, pointer.downY);
    let height = Math.abs(pointer.y - pointer.downY);

    // console.log(pointer.downX, pointer.downY, pointer.x - pointer.downX, pointer.y - pointer.downY);
    // console.log(x, y, width, height)
    console.log(`${x}, ${y}, ${width}, ${height}`)
  });
}

export function updateRectangle(scene) {
  var graphics = scene.add.graphics();


  scene.input.on('pointermove', function (pointer) {

    if (draw) {
      graphics.clear();
      graphics.lineStyle(thickness, color, alpha);
      graphics.strokeRect(pointer.downX, pointer.downY, pointer.x - pointer.downX, pointer.y - pointer.downY);
    }

  });

}
