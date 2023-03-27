//Váriaveis gerais dos carros
let comprimentoCarros = 50;
let alturaCarros = 40;

let xCarros = [600,600,600,600,600,600];
let yCarros = [40,95,150,210,265,315];
let velocidadeCarros = [2, 2.5, 4, 5, 3.3, 2.3];

function mostraCarro(){
    for(let i =0; i < imagemCarros.length; i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
    }
}

function movimentaCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
        }
}

function voltaPosicaoInicial(){
    for(let i = 0; i < imagemCarros.length; i++){
        if (xCarros[i] < (comprimentoCarros * -1)){
            xCarros[i] = 600;
        }
    }
}