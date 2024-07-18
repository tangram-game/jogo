

const sprites = new Image();
sprites.src = './sprits.png';



const canvas = document.querySelector("canvas");
canvas.widht = 320;
canvas.height = 480;
const contexto = canvas.getContext("2d");

const planodefundo = {
    spriteX:   ,
    spritey:   ,
    largura:   ,
    altura:    ,
    x:         ,
    y:         ,
    desenha(){
        contexto.fillStyle = "#70c5ce"
        contexto.fillRect(0,0 canvas.widht, canvas.height)

        contexto.drawImage(
            sprites,
            planodefundo.spriteX, planodefundo.spritey,
            planodefundo.largura, planodefundo.altura,
            planodefundo.x, planodefundo.y,
            planodefundo.largura, planodefundo.altura,
        ),


        contexto.drawImage(
            sprites,
            planodefundo.spriteX, planodefundo.spritey,
            planodefundo.largura, planodefundo.altura,
            (planodefundo.x + planodefundo.largura), planodefundo.y,
            planodefundo.largura, planodefundo.altura,
        );
    },
};

const chao = {
    spriteX:   ,
    spritey:   ,
    largura:   ,
    altura:    ,
    x:         ,
    y:         ,
    desenha(){
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spritey,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura,
        ),


        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spritey,
            chao.largura, chao.altura,
            (chao.x + chao.largura), chao.y,
            chao.largura, chao.altura,
        );
    },
};


const flappybird = {
    spritX:     ,        //recorte da imagem importada
    spritY:     ,     //recort da imagem importada
    largura:    ,       //tamanho do sprite no jogo
    altura:     ,      //tamanho do sprite no jogo
    x:          ,     //localização do sprite no canvas
    y:          ,    //localização do sprite no canvas

   desenha() {
    contexto.drawImage(
        sprites,
        flappybird.spritX, flappybird.spritY,
        flappybird.largura, flappybird.altura,
        flappybird.x, flappybird.y,
        flappybird.altura, flappybird.largura, 
       );
    }   
}

functionloop() {
    planodefundo.desenha();
    chao.desenha();
    flappybird.desenha();

    flappybird.y = flappy.bird.y + 1;

    requestAnimationFrame(loop);
}
loop();
