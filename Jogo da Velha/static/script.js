var vez_jogador = 0
var espacos = []

function jogada (posição){
    if(document.getElementById(posição).innerHTML != "") {
        return
    } else {
        if (vez_jogador == 0 || vez_jogador % 2 == 0){
            document.getElementById(posição).innerHTML = "X"
        } else {
            document.getElementById(posição).innerHTML = "O"
        }
        vez_jogador++
        espacos[posição] = document.getElementById(posição).innerHTML
        tem_vencedor()
    }
}

function tem_vencedor() {
    if ((espacos[0] == espacos[1] && espacos[1] == espacos[2] ) && espacos[0,1,2] != undefined) {
        alert ("O jogador " + espacos[0] + " foi o vencedor!!")
        reinicia()
    }
    if ((espacos[3] == espacos[4] && espacos[4] == espacos[5] ) && espacos[3,4,5] != undefined) {
        alert ("O jogador " + espacos[3] + " foi o vencedor!!")
        reinicia()
    }
    if ((espacos[6] == espacos[7] && espacos[7] == espacos[8] ) && espacos[6,7,8] != undefined) {
        alert ("O jogador " + espacos[6] + " foi o vencedor!!")
        reinicia()
    }
    if ((espacos[0] == espacos[3] && espacos[3] == espacos[6] ) && espacos[0,3,6] != undefined) {
        alert ("O jogador " + espacos[0] + " foi o vencedor!!")
        reinicia()
    }
    if ((espacos[1] == espacos[4] && espacos[4] == espacos[7] ) && espacos[1,4,7] != undefined) {
        alert ("O jogador " + espacos[1] + " foi o vencedor!!")
        reinicia()
    }
    if ((espacos[2] == espacos[5] && espacos[5] == espacos[8] ) && espacos[2,5,8] != undefined) {
        alert ("O jogador " + espacos[2] + " foi o vencedor!!")
        reinicia()
    }
    if ((espacos[0] == espacos[4] && espacos[4] == espacos[8] ) && espacos[0,4,8] != undefined) {
        alert ("O jogador " + espacos[0] + " foi o vencedor!!")
        reinicia()
    }
    if ((espacos[6] == espacos[4] && espacos[4] == espacos[2] ) && espacos[6,4,2] != undefined) {
        alert ("O jogador " + espacos[6] + " foi o vencedor!!")
        reinicia()
    }
}


function reinicia() {
    for (let i = 0; i <= 8; i++) {
        document.getElementById(i).innerHTML = ""
    }
    vez_jogador = 0
    espacos = []
}
