var jogador = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id) {
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
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    quadrado1 = document.getElementById(1);
    quadrado2 = document.getElementById(2);
    quadrado3 = document.getElementById(3);
    quadrado4 = document.getElementById(4);
    quadrado5 = document.getElementById(5);
    quadrado6 = document.getElementById(6);
    quadrado7 = document.getElementById(7);
    quadrado8 = document.getElementById(8);
    quadrado9 = document.getElementById(9);
}

function checaSequencia() {

}