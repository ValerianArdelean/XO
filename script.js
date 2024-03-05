let curentPlayer = 0, pen = "", clicks1 = 0, clicks2 = 0, clicks = 0;
let matrix = document.getElementById("matrix");
let message = document.getElementById("message");
let button1 = document.getElementById("user1");
let button2 = document.getElementById("user2");
let color = "#91C8D3";

function displayPlayer() {
    message.innerText = `player ${curentPlayer} is set !\n you are playing with ${pen}`;
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
    if (!winner) {
        if (clicks1 > 0) {
            alert("don't try cheating !");
        } else {
            curentPlayer = 1;
            pen = "X";
            displayPlayer();
            styleButton1();
            resetButton2();
        }
    }
}

function user2() {
    if (!winner) {
        if (clicks2 > 0) {
            alert("don't try cheating !");
        } else {
            curentPlayer = 2;
            pen = "O";
            displayPlayer();
            styleButton2();
            resetButton1();
        }
    }
}

function checkWinner() {
    for (let i = 0; i < 3; ++i) {
        let row = matrix.children[i];
        if (row.children[0].innerText == 'X' && row.children[1].innerText == 'X' && row.children[2].innerText == 'X') {
            return "X";
        } else if (row.children[0].innerText == 'O' && row.children[1].innerText == 'O' && row.children[2].innerText == 'O') {
            return "O";
        }
        if (matrix.children[0].children[i].innerText == 'X' && matrix.children[1].children[i].innerText == 'X' && matrix.children[2].children[i].innerText == 'X') {
            return "X";
        } else if (matrix.children[0].children[i].innerText == 'O' && matrix.children[1].children[i].innerText == 'O' && matrix.children[2].children[i].innerText == 'O') {
            return "O";
        }
    }
    if (matrix.children[0].children[0].innerText == 'X' && matrix.children[1].children[1].innerText == 'X' && matrix.children[2].children[2].innerText == 'X') {
        return "X";
    } else if (matrix.children[0].children[0].innerText == 'O' && matrix.children[1].children[1].innerText == 'O' && matrix.children[2].children[2].innerText == 'O') {
        return "O";
    }
    if (matrix.children[0].children[2].innerText == 'X' && matrix.children[1].children[1].innerText == 'X' && matrix.children[2].children[0].innerText == 'X') {
        return "X";
    } else if (matrix.children[0].children[2].innerText == 'O' && matrix.children[1].children[1].innerText == 'O' && matrix.children[2].children[0].innerText == 'O') {
        return "O";
    }
    return false;
}

let winner = "";

matrix.addEventListener("click", function(evt) {
    if (pen != "") {
        if (evt.target.innerText == "") {
            if (curentPlayer == 1 && clicks1 == 0 && !winner) {
                clicks2 = 0;
                evt.target.innerText = pen;
                message.innerText = "SELECT PLAYER ! \n next turn is player 2, writing O";
                ++clicks1;
                ++clicks;
            } else if (curentPlayer == 2 && clicks2 == 0 && !winner) {
                clicks1 = 0;
                evt.target.innerText = pen;
                message.innerText = "SELECT PLAYER ! \n next turn is player 1, writing X";
                ++clicks2;
                ++clicks;
            } else if (curentPlayer == 1 && !winner) {
                message.innerText = "WRONG PLAYER ! \n choose player no 2 !";
            } else if (curentPlayer == 2 && !winner) {
                message.innerText = "WRONG PLAYER ! \n choose player no 1 !";
            }
            if (clicks > 4) {
                winner = checkWinner();
                if (winner) {
                    message.innerText = winner;
                    alert(winner);
                }
            }
        } else if (!winner) {
            alert("click on an empty box !");
        }
    } else {
        alert("SET USER FIRST !!");
    }
});


