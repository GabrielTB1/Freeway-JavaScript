function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro(imagemCarro1,xCarros[0],yCarros[0]);
  mostraCarro(imagemCarro2,xCarros[1],yCarros[1]);
  mostraCarro(imagemCarro3,xCarros[2],yCarros[2]);
  movimentaCarro();
  voltaPosicaoInicial();
  movimentaAtor();
}