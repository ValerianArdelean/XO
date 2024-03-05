let player = 0, pen = "", clicks1 = 0, clicks2 = 0;
let message = document.getElementById("message");
let button1 = document.getElementById("user1");
let button2 = document.getElementById("user2");
let color = "#91C8D3";

function setPlayer() {
    message.innerText = `PLAYER ${player} SET !\n You are playing with ${pen}`;
}

function styleButton1() {
    button1.style.background = color;
    button1.style.color = "white";
}

function styleButton2() {
    button2.style.background = color;
    button2.style.color = "white";
}

function resetButton1() {
    button1.style.background = 0;
    button1.style.color = "black";
}

function resetButton2() {
    button2.style.background = 0;
    button2.style.color = "black";
}

function user1() {
    player = 1;
    pen = "X";
    setPlayer();
    styleButton1();
    resetButton2();
}

function user2() {
    player = 2;
    pen = "O";
    setPlayer();
    styleButton2();
    resetButton1();
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
            } else if (player == 1) {
                message.innerText = "WRONG PLAYER ! \n choose player no 2 !";
            } else if (player == 2) {
                message.innerText = "WRONG PLAYER ! \n choose player no 1 !";
            }
        }
    } else {
        alert("SET USER FIRST !!");
    }
});


