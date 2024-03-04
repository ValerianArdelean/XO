let player = 0, pen = "", clicks1 = 0, clicks2 = 0;
let message = document.getElementById("user");

function setPlayer() {
    message.innerText = `PLAYER ${player} SET !\n You are playing with ${pen}`;
}

function user1() {
    player = 1;
    pen = "X";
    setPlayer();
}

function user2() {
    player = 2;
    pen = "O";
    setPlayer();
}

document.getElementById("matrix").addEventListener("click", function(evt) {
    if (pen != "") {
        if (evt.target.innerText == "") {
            if (player == 1 && clicks1 == 0) {
                clicks2 = 0;
                evt.target.innerText = pen;
                message.innerText = "SELECT PLAYER ! \n next turn is player 2, playing with O";
                ++clicks1;
            } else if (player == 2 && clicks2 == 0) {
                clicks1 = 0;
                evt.target.innerText = pen;
                message.innerText = "SELECT PLAYER ! \n next turn is player 1, playing with X";
                ++clicks2;
            }
        }
    } else {
        alert("SET USER FIRST !!");
    }
});


