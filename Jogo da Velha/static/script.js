// Cesuca 2021 
// Matheus Leffa Hilbert, Eduardo Fofonka Melo

// {VARIÁVEIS DE CONTROLE}
var vez_jogador = 0
var espacos = []
var jogadas = 0;
var jogadaCpu;
var modoDeJogo;

// Função que seleciona o modo de jogo.
function updateGameMode() {
    let select = document.getElementById('gameplay');
    let option = select.options[select.selectedIndex];
    modoDeJogo = option.value;
}

// Controla quem irá jogar, e suas jogadas, conforme o modo de jogo.
function jogada(posição) {
    if (modoDeJogo == "mp") { // Se o modo de jogo for Multi-player, executa este trecho de código.
        if (document.getElementById(posição).innerHTML != "") {
            return
        } else {
            if (vez_jogador == 0 || vez_jogador % 2 == 0) {
                document.getElementById(posição).innerHTML = "x"
            } else {
                document.getElementById(posição).innerHTML = "o"
            }
            jogadas++;
            vez_jogador++
            espacos[posição] = document.getElementById(posição).innerHTML
            tem_vencedor()
        }
    } else { // Se não for Multi-player, executa este trecho de código para Single-player.
        if (document.getElementById(posição).innerHTML != "") {
            return
        } else {
            if (vez_jogador == 0 || vez_jogador % 2 == 0) {
                document.getElementById(posição).innerHTML = "x";
                espacos[posição] = document.getElementById(posição).innerHTML;
                jogadas++;
                vez_jogador++;
                tem_vencedor();
            }
            cpuLogic();
            tem_vencedor();
        }
    }
}

// Toda lógica da cpu que verifica as possibilidades de vitória do player e contra-ataca.
function cpuLogic() {
    if (espacos[0] == "x" && espacos[8] == "x") cpuResposta(0,8,4);
    if (espacos[2] == "x" && espacos[6] == "x") cpuResposta(2,6,4);
    if (espacos[0] == "x" && espacos[2] == "x") cpuResposta(0,2,1);
    if (espacos[3] == "x" && espacos[5] == "x") cpuResposta(3,5,4);
    if (espacos[6] == "x" && espacos[8] == "x") cpuResposta(6,8,7);
    if (espacos[0] == "x" && espacos[6] == "x") cpuResposta(0,6,3);
    if (espacos[1] == "x" && espacos[7] == "x") cpuResposta(1,7,4);
    if (espacos[2] == "x" && espacos[8] == "x") cpuResposta(2,8,5);
    if (espacos[0] == "x" && espacos[4] == "x") cpuResposta(0,4,8);
    if (espacos[2] == "x" && espacos[4] == "x") cpuResposta(2,4,6);
    if (espacos[6] == "x" && espacos[4] == "x") cpuResposta(6,4,2);
    if (espacos[8] == "x" && espacos[4] == "x") cpuResposta(8,4,0);
    if (espacos[0] == "x" && espacos[3] == "x") cpuResposta(0,3,6);
    if (espacos[1] == "x" && espacos[4] == "x") cpuResposta(1,4,7);
    if (espacos[2] == "x" && espacos[5] == "x") cpuResposta(2,5,8);
    if (espacos[6] == "x" && espacos[3] == "x") cpuResposta(6,3,0);
    if (espacos[7] == "x" && espacos[4] == "x") cpuResposta(7,4,1);
    if (espacos[8] == "x" && espacos[5] == "x") cpuResposta(8,5,2);
    if (espacos[0] == "x" && espacos[1] == "x") cpuResposta(0,1,2);
    if (espacos[3] == "x" && espacos[4] == "x") cpuResposta(3,4,5);
    if (espacos[6] == "x" && espacos[7] == "x") cpuResposta(6,7,8);
    if (espacos[2] == "x" && espacos[1] == "x") cpuResposta(2,1,0);
    if (espacos[5] == "x" && espacos[4] == "x") cpuResposta(5,4,3);
    if (espacos[8] == "x" && espacos[7] == "x") cpuResposta(8,7,6);
    // Caso não haja nenhuma defesa válida escolhe aleatoriamente uma posição
    if (vez_jogador % 2 == 1 && jogadas < 9) {
        let teste = true;
        do {
            jogadaCpu = Math.round(Math.random() * 8);
            if (document.getElementById(jogadaCpu).innerHTML == "") {
                document.getElementById(jogadaCpu).innerHTML = "o";
                espacos[jogadaCpu] = document.getElementById(jogadaCpu).innerHTML
                jogadas++;
                vez_jogador++;
                teste = false;
            }
        } while (teste && jogadas < 9)
    }
}
// Recebe as posições que contém uma possibilidade de vitória e coloca o valor para impedir
function cpuResposta(posicao1, posicao2, resposta) {
    if (vez_jogador % 2 == 1 && jogadas < 9) {
        if (espacos[posicao1] == "x" && espacos[posicao2] == "x") {
            if (document.getElementById(resposta).innerHTML == "") {
                document.getElementById(resposta).innerHTML = "o";
                espacos[resposta] = document.getElementById(resposta).innerHTML
                jogadas++;
                vez_jogador++;
            }
        }
    }
}

// Verifica todas as possibilidades em que pode haver um vencedor retornando um alert caso alguém tenha vencido 
function tem_vencedor() {
    if ((espacos[0] == espacos[1] && espacos[1] == espacos[2]) && espacos[0, 1, 2] != undefined) {
        alert("O jogador " + espacos[0] + " foi o vencedor!!")
        reinicia()
    }
    if ((espacos[3] == espacos[4] && espacos[4] == espacos[5]) && espacos[3, 4, 5] != undefined) {
        alert("O jogador " + espacos[3] + " foi o vencedor!!")
        reinicia()
    }
    if ((espacos[6] == espacos[7] && espacos[7] == espacos[8]) && espacos[6, 7, 8] != undefined) {
        alert("O jogador " + espacos[6] + " foi o vencedor!!")
        reinicia()
    }
    if ((espacos[0] == espacos[3] && espacos[3] == espacos[6]) && espacos[0, 3, 6] != undefined) {
        alert("O jogador " + espacos[0] + " foi o vencedor!!")
        reinicia()
    }
    if ((espacos[1] == espacos[4] && espacos[4] == espacos[7]) && espacos[1, 4, 7] != undefined) {
        alert("O jogador " + espacos[1] + " foi o vencedor!!")
        reinicia()
    }
    if ((espacos[2] == espacos[5] && espacos[5] == espacos[8]) && espacos[2, 5, 8] != undefined) {
        alert("O jogador " + espacos[2] + " foi o vencedor!!")
        reinicia()
    }
    if ((espacos[0] == espacos[4] && espacos[4] == espacos[8]) && espacos[0, 4, 8] != undefined) {
        alert("O jogador " + espacos[0] + " foi o vencedor!!")
        reinicia()
    }
    if ((espacos[6] == espacos[4] && espacos[4] == espacos[2]) && espacos[6, 4, 2] != undefined) {
        alert("O jogador " + espacos[6] + " foi o vencedor!!")
        reinicia()
    }
}

// Reinicia o jogo e zera todas as variáveis de controle
function reinicia() {
    for (let i = 0; i <= 8; i++) {
        document.getElementById(i).innerHTML = "";
    }
    vez_jogador = 0;
    espacos = [];
    jogadas = 0;
}
