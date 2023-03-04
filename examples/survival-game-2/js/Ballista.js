export default class Ballista extends Phaser.Physics.Matter.Sprite {
  constructor(data) {
    let { scene, name, x, y, frame } = data;
    super(scene.matter.world, x, y, "items", frame);
    this.maxReload = 2000;
    this.reload = this.maxReload;
    this.projectileSpeed = 3;
    this.scene.add.existing(this);
    const { Body, Bodies } = Phaser.Physics.Matter.Matter;
    var circleCollider = Bodies.circle(this.x, this.y, 10, { isSensor: false, label: "collider" });
    var circleSensor = Bodies.circle(this.x, this.y, 80, { isSensor: true, label: "circleSensor" });
    const compoundBody = Body.create({
      parts: [circleCollider, circleSensor],
      frictionAir: 0.35,
    });
    this.setExistingBody(compoundBody);
    this.setScale(0.8);
    this.setStatic(true);
    this.scene.matterCollision.addOnCollideStart({
      objectA: [circleSensor],
      callback: (other) => {
        //console.log(other.gameObjectB instanceof Enemy);
        if (!this.attacking && !other.bodyB.isSensor && other.gameObjectB.isEnemy) {
          this.attacking = other.gameObjectB;
        }
      },
      context: this.scene,
    });

    this.scene.matterCollision.addOnCollideEnd({
      objectA: [circleSensor],
      callback: (other) => {
        if (this.attacking === other.gameObjectB) {
          this.attacking = null;
        }
      },
      context: this.scene,
    });
  }

  update(time, delta) {
    if (!this.attacking) return;
    if(this.attacking.dead){
      this.attacking = null;
      return
    }
    let angle = Math.atan2(this.attacking.y - this.y, this.attacking.x - this.x);
    this.rotation = angle + Math.PI / 4;
    this.reload += delta;
    if (this.reload >= this.maxReload) {
      this.reload = 0;
      if (!this.projectile) {
        const { Bodies } = Phaser.Physics.Matter.Matter;
        var circleSensor = Bodies.circle(this.x, this.y, 10, { isSensor: true, label: "collider" });
        
        this.scene.matterCollision.addOnCollideStart({
          objectA: [circleSensor],
          callback: (other) => {
            if (other.gameObjectB && other.gameObjectB.hit && other.gameObjectB.isEnemy) {
              //console.log(other.gameObjectB);
              other.gameObjectB.hit();
              if (other.gameObjectB.dead){
                 other.gameObjectB.destroy();
                 this.attacking = null;
              }
            }
          },
          context: this.scene,
        });
        
        
        this.projectile = this.scene.matter.add
          .sprite(this.x, this.y, "items", 80)
          .setScale(0.5)
          .setExistingBody(circleSensor)
          .setFrictionAir(0);
      }
      this.projectile.x = this.x;
      this.projectile.y = this.y;
      let target = new Phaser.Math.Vector2(this.attacking.x, this.attacking.y);
      let direction = target.subtract(new Phaser.Math.Vector2(this.x, this.y));
      let v = direction.normalize().scale(this.projectileSpeed);
      this.projectile.setVelocity(v.x, v.y);
      this.projectile.rotation = this.rotation;
    }
  }
}
