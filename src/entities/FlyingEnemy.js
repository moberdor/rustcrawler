import { FRAMES } from '../config.js';

export class FlyingEnemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, patrolDist = 48) {
    super(scene, x, y, 'tiles', FRAMES.FLYER_FRAMES[0]);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setSize(12, 12).setOffset(2, 2);
    this.body.setAllowGravity(false);
    this.setOrigin(0.5, 0.5);
    this.startY = y;
    this.patrolDist = patrolDist;
    this.dir = -1;
    this.speed = 60;
    this.body.setVelocityY(this.dir * this.speed);
  }

  update(time, delta) {
    if (!this.active) return;
    if (this.y < this.startY - this.patrolDist) {
      this.dir = 1;
      this.y = this.startY - this.patrolDist;
    } else if (this.y > this.startY + this.patrolDist) {
      this.dir = -1;
      this.y = this.startY + this.patrolDist;
    }
    this.body.setVelocityY(this.dir * this.speed);
    const f = FRAMES.FLYER_FRAMES;
    this.setFrame(f[Math.floor(time / 100) % f.length]);
  }
}
