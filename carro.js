//Váriaveis gerais dos carros
let comprimentoCarros = 50;
let alturaCarros = 40;

let xCarros = [600,600,600];
let yCarros = [40,95,150];
let velocidadeCarros = [2,2.5,4];

function mostraCarro(imagem,x,y){
    image(imagem,x,y,comprimentoCarros,alturaCarros);
}

function movimentaCarro(){
    xCarros[0] -= velocidadeCarros[0];
    xCarros[1] -= velocidadeCarros[1];
    xCarros[2] -= velocidadeCarros[2];
}

function voltaPosicaoInicial(){
    if (xCarros[0] < (comprimentoCarros * -1)){
        xCarros[0] = 600;
    }
    if (xCarros[1] < (comprimentoCarros * -1)){
        xCarros[1] = 600;
    }
    if (xCarros[2] < (comprimentoCarros * -1)){
        xCarros[2] = 600;
    }
}