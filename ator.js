// Variáveis do ator
let xAtor = 15;
let yAtor = 370;

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