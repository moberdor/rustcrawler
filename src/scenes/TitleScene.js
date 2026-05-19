import { VIEW } from '../config.js';

const FONT = '"Press Start 2P"';

export class TitleScene extends Phaser.Scene {
  constructor() { super('Title'); }

  create() {
    this.add.text(VIEW.WIDTH / 2, 70, 'RUSTCRAWLER', {
      fontFamily: FONT, fontSize: '24px', color: '#ffffff',
    }).setOrigin(0.5).setResolution(2);
    this.add.text(VIEW.WIDTH / 2, 110, 'THRESHOLD', {
      fontFamily: FONT, fontSize: '10px', color: '#888888',
    }).setOrigin(0.5).setResolution(2);

    const lines = [
      'MOVE   ARROWS / A D',
      'JUMP   SPACE / W / UP',
      'DASH   SHIFT / X (MID-AIR)',
      '',
      'FIND THE KEY, REACH THE DOOR',
    ];
    let y = 170;
    for (const line of lines) {
      this.add.text(VIEW.WIDTH / 2, y, line, {
        fontFamily: FONT, fontSize: '7px', color: '#cccccc',
      }).setOrigin(0.5).setResolution(2);
      y += 14;
    }

    const prompt = this.add.text(VIEW.WIDTH / 2, VIEW.HEIGHT - 40, 'PRESS SPACE TO START', {
      fontFamily: FONT, fontSize: '9px', color: '#ffffff',
    }).setOrigin(0.5).setResolution(2);
    this.tweens.add({ targets: prompt, alpha: 0.3, duration: 600, yoyo: true, repeat: -1 });

    this.input.keyboard.once('keydown-SPACE', () => this.scene.start('Threshold'));
    this.input.keyboard.once('keydown-ENTER', () => this.scene.start('Threshold'));
  }
}
