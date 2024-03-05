let curentPlayer = 0, pen = "", clicks1 = 0, clicks2 = 0, clicks = 0, winner = "", opponent = 0;
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
            alert("don't try on cheating !");
        } else {
            curentPlayer = 1;
            opponent = 2;
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
            alert("don't try on cheating !");
        } else {
            curentPlayer = 2;
            opponent = 1;
            pen = "O";
            displayPlayer();
            styleButton2();
            resetButton1();
        }
    }
}

function checkWinner() {
    let mainDiagX = true, mainDiagO = true, secDiagX = true, secDiagO = true;
    for (let i = 0; i < 3; ++i) {
        if (matrix.children[i].children[i].innerText != 'X') {
            mainDiagX = false;
        }
        if (matrix.children[i].children[i].innerText != 'O') {
            mainDiagO = false;
        }
        if (matrix.children[i].children[2 - i].innerText != 'X') {
            secDiagX = false;
        }
        if (matrix.children[i].children[2 - i].innerText != 'O') {
            secDiagO = false;
        }
        let rowX = true, rowO = true, colX = true, colO = true;
        for (let j = 0; j < 3; ++j) {
            if (matrix.children[i].children[j].innerText != 'X') {
                rowX = false;
            }
            if (matrix.children[i].children[j].innerText != 'O') {
                rowO = false;
            }
            if (matrix.children[j].children[i].innerText != 'X') {
                colX = false;
            }
            if (matrix.children[j].children[i].innerText != 'O') {
                colO = false;
            }
        }
        if (rowX || colX) {
            return "X";
        } else if (rowO || colO) {
            return "O";
        }
    }
    if (mainDiagX || secDiagX) {
        return "X";
    } else if (mainDiagO || secDiagO) {
        return "O";
    }
    return false;
}

matrix.addEventListener("click", function(evt) {
    if (evt.target.classList.contains("cell")) {
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
                } else if (!winner) {
                    message.innerText = `WRONG PLAYER ! \n choose player no ${opponent} !`;
                }
                if (clicks > 4) {
                    winner = checkWinner();
                    if (winner) {
                        message.innerText = `Congratulations\n user ${curentPlayer} wins !`;
                        alert(`User ${curentPlayer} wins !`);
                    }
                }
            } else if (!winner) {
                alert("click on an empty box !");
            }
        } else {
            alert("SET USER FIRST !!");
        }
    }
});


