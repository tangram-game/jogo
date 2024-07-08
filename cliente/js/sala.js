import Phaser from 'phaser'

export default class sala extends Phaser.Scene {
  constructor () {
    super('sala')
  }

  preload () {
    // Carrega o som de início
    this.load.audio('iniciar', './assets/iniciar.mp3')

    // Carrega a imagem de fundo
    this.load.image('fundo', './assets/fundo.png')
  }

  create () {
    // Define o objeto de som
    this.iniciar = this.sound.add('iniciar')

    // Adiciona a imagem de fundo
    this.add.image(400, 225, 'fundo')

    // Adiciona o texto da sala
    this.mensagem = this.add.text(100, 50, 'Sala 1', {
      fontSize: '32px',
      fill: '#fff',
      fontFamily: 'Courier New'
    })
      .setInteractive() // Permite que o texto seja clicável
      .on('pointerdown', () => {
        // Toca o som
        this.iniciar.play()

        // Define a variável global da sala
        globalThis.game.sala = 1

        // Emite o evento de entrar na sala
        globalThis.game.socket.emit('entrar-na-sala', globalThis.game.sala)
      })

    // Define o evento de recebimento da mansagem 'jogadores'
    globalThis.game.socket.on('jogadores', (jogadores) => {
      // Se o segundo jogador já estiver conectado, inicia o jogo
      if (jogadores.segundo) {
        // Apresenta texto na tela
        this.mensagem.setText('Conectando...')

        // Define a variável global dos jogadores
        globalThis.game.jogadores = jogadores

        // Para a cena atual e inicia a cena do mapa
        globalThis.game.scene.stop('sala')
        globalThis.game.scene.start('mapa')
      } else if (jogadores.primeiro) {
        // Se o primeiro jogador já estiver conectado, aguarda o segundo
        this.mensagem.setText('Aguardando segundo jogador...')
      }
    })
  }

  update () {
  }
}