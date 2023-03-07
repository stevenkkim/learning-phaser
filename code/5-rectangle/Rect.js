export class Rect extends Phaser.Scene {
  constructor() {
    super('Rect')
  }

  preload() {
  }

  create() {
    console.log("RECT")
  }

  update() {

    var graphics = this.add.graphics();

    var color = 0xffff00;
    var thickness = 2;
    var alpha = 1;
    var hasLogged = false;
  
    //  Events
  
    var draw = false;
  
    this.input.on('pointerdown', function (pointer) {
      hasLogged = false;
      draw = true;
  
    });
  
    this.input.on('pointerup', function (pointer) {
      draw = false;
      console.log(hasLogged, pointer.downX, pointer.downY, pointer.x - pointer.downX, pointer.y - pointer.downY)
    });
  
    this.input.on('pointermove', function (pointer) {
  
      if (draw) {
        graphics.clear();
        graphics.lineStyle(thickness, color, alpha);
        graphics.strokeRect(pointer.downX, pointer.downY, pointer.x - pointer.downX, pointer.y - pointer.downY);
      }
  
    });
  

  }



}
