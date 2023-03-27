// Variáveis do ator
let xAtor = 15;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

let alturaAtor = 25;
let comprimentoAtor = 25;

function mostraAtor(){
    image(imagenDoAtor,xAtor,yAtor,alturaAtor,comprimentoAtor);
}

function movimentaAtor(){
    if (keyIsDown(UP_ARROW) && yAtor > 0){
      yAtor -= 2;
    }
    else if (keyIsDown(DOWN_ARROW) && yAtor < (height - alturaAtor)){
      yAtor += 2;
    }
}
  
function keyPressed(){
    if (keyCode === LEFT_ARROW && (xAtor - 30) >= 0){
      xAtor -= 30;
    }
    else if (keyCode === RIGHT_ARROW && (xAtor + 30) <= (width - comprimentoAtor)) {
      xAtor += 30;
    }
}

function verificaColisao(){
  for (let i =0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarros,alturaCarros,xAtor,yAtor,alturaAtor);
    if (colisao){
      voltaAtorInicioY();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorInicioY(){
  yAtor = 370;
}

function mostraPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(meusPontos,width / 5, 27);
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtorInicioY();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}