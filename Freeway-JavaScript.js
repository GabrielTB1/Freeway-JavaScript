// Variáveis de imagem
let imagemDaEstrada;
let imagenDoAtor;
let imagemCarro;

// Variáveis do ator
let xAtor = 10;
let yAtor = 370;

let alturaAtor = 25;
let comprimentoAtor = 25;

// Variáveis do carro
let xCarro = 600;
let yCarro = 40;

function preload(){
  imagenDoAtor = loadImage("imagens/ator-1.png");
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemCarro = loadImage("imagens/carro-1.png");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
}

function mostraAtor(){
  image(imagenDoAtor,xAtor,yAtor,alturaAtor,comprimentoAtor);
}

function mostraCarro(){
  image(imagemCarro,xCarro,yCarro,50,40);
}

function movimentaCarro(){
  xCarro -= 2;
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
  if (keyCode === LEFT_ARROW && (xAtor - 30) > 0){
    xAtor -= 30;
  }
  else if (keyCode === RIGHT_ARROW && (xAtor + 25 + 30) < width) {
    xAtor += 30;
  }
}