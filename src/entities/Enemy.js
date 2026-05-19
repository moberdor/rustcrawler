import { FRAMES } from '../config.js';

export class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, patrolDist = 64) {
    super(scene, x, y, 'tiles', FRAMES.ENEMY_FRAMES[0]);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setSize(12, 12).setOffset(2, 4);
    this.body.setAllowGravity(true);
    this.body.setGravityY(800);
    this.setOrigin(0.5, 0.5);
    this.startX = x;
    this.patrolDist = patrolDist;
    this.dir = 1;
    this.speed = 50;
    this.body.setVelocityX(this.dir * this.speed);
    this.body.setCollideWorldBounds(false);
  }

  update(time, delta) {
    if (!this.active) return;
    if (this.x > this.startX + this.patrolDist) {
      this.dir = -1;
      this.x = this.startX + this.patrolDist;
    } else if (this.x < this.startX - this.patrolDist) {
      this.dir = 1;
      this.x = this.startX - this.patrolDist;
    }
    if (this.body.blocked.left) this.dir = 1;
    if (this.body.blocked.right) this.dir = -1;
    this.body.setVelocityX(this.dir * this.speed);
    this.setFlipX(this.dir < 0);
    const f = FRAMES.ENEMY_FRAMES;
    this.setFrame(f[Math.floor(time / 140) % f.length]);
  }
}
