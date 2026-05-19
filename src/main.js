import { VIEW } from './config.js';
import { BootScene } from './scenes/BootScene.js';
import { TitleScene } from './scenes/TitleScene.js';
import { ThresholdScene } from './scenes/ThresholdScene.js';
import { GameOverScene } from './scenes/GameOverScene.js';
import { WinScene } from './scenes/WinScene.js';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: VIEW.WIDTH,
  height: VIEW.HEIGHT,
  zoom: VIEW.ZOOM,
  backgroundColor: '#000000',
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [BootScene, TitleScene, ThresholdScene, GameOverScene, WinScene],
};

new Phaser.Game(config);
