import Phaser from 'phaser'
export default class abertura extends Phaser.Scene {
  constructor () {
    super('abertura')
  }

  preload () {
    this.load.image('fundo', './assets/fundo.png')
  }

  create () {
    this.add.image(400, 225, 'fundo')
      .setInteractive()
      .on('pointerdown', () => {
        navigator.mediaDevices.getUserMedia({ video: false, audio: true })
          .then((stream) => {
            globalThis.game.midias = stream
          })
          .catch((error) => console.error(error))

        globalThis.game.scene.stop('abertura')
        globalThis.game.scene.start('sala')
      })
      .preFX.addBlur()
  }

  update () {
  }
}