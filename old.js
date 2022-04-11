var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id) {

    if(vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if( jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checarVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor() {
    quadrado1 = document.getElementById(1);
    quadrado2 = document.getElementById(2);
    quadrado3 = document.getElementById(3);
    quadrado4 = document.getElementById(4);
    quadrado5 = document.getElementById(5);
    quadrado6 = document.getElementById(6);
    quadrado7 = document.getElementById(7);
    quadrado8 = document.getElementById(8);
    quadrado9 = document.getElementById(9);

    if(checarSequencia(quadrado1,quadrado2,quadrado3)){
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
    } else if(checarSequencia(quadrado4,quadrado5,quadrado6)) {
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
    } else if(checarSequencia(quadrado7,quadrado8,quadrado9)) {
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
    } else if(checarSequencia(quadrado1,quadrado4,quadrado7)) {
        mudarCorQuadrado(quadrado1,quadrado4,quadrado7);
        mudarVencedor(quadrado1);
    } else if(checarSequencia(quadrado2,quadrado5,quadrado8)) {
        mudarCorQuadrado(quadrado2,quadrado5,quadrado8);
        mudarVencedor(quadrado2);
    } else if(checarSequencia(quadrado3,quadrado6,quadrado9)) {
        mudarCorQuadrado(quadrado3,quadrado6,quadrado9);
        mudarVencedor(quadrado3);
    } else if(checarSequencia(quadrado1,quadrado5,quadrado9)) {
        mudarCorQuadrado(quadrado1,quadrado5,quadrado9);
        mudarVencedor(quadrado1);
    } else if(checarSequencia(quadrado3,quadrado5,quadrado7)) {
        mudarCorQuadrado(quadrado3,quadrado5,quadrado7);
        mudarVencedor(quadrado1);
    } 
}

function checarSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true;
    }

    return eigual;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(var i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }
    mudarJogador('X');
}