let curentPlayer = 0, winner = "", opponent = 0, user1clicks = 0, user2clicks = 0, pen = "";
let matrix = document.getElementById("matrix");
let button1 = document.getElementById("user1");
let button2 = document.getElementById("user2");

function displayMessage(status, action, data) {
    document.getElementById("message1").innerText = status;
    document.getElementById("message2").innerText = action + data;
}

function styleButton1() {
    button1.style.background = "#91C8D3";
    button1.style.color = "white";
    button2.style.background = 0;
    button2.style.color = "black";
}

function styleButton2() {
    button2.style.background = "#91C8D3";
    button2.style.color = "white";
    button1.style.background = 0;
    button1.style.color = "black";
}

function user1() {
    if (!winner) {
        if (user1clicks > 0) {
            alert("don't try on cheating !");
        } else {
            curentPlayer = 1;
            opponent = 2;
            pen = "X";
            displayMessage(`player ${curentPlayer} is set !`, "you are playing with ", pen);
            styleButton1();
        }
    }
}

function user2() {
    if (!winner) {
        if (user2clicks > 0) {
            alert("don't try on cheating !");
        } else {
            curentPlayer = 2;
            opponent = 1;
            pen = "O";
            displayMessage(`player ${curentPlayer} is set !`, "you are playing with ", pen);
            styleButton2();
        }
    }
}

function selectWinner(pen) {
    if ((matrix.children[0].children[0].innerText === pen && matrix.children[1].children[1].innerText === pen && matrix.children[2].children[2].innerText === pen) || (matrix.children[0].children[2].innerText === pen &&
        matrix.children[1].children[1].innerText === pen &&
        matrix.children[2].children[0].innerText === pen)) {
            return true;
    }
    for (let i = 0; i < 3; ++i) {
        if ((matrix.children[i].children[0].innerText === pen &&
            matrix.children[i].children[1].innerText === pen &&
            matrix.children[i].children[2].innerText === pen) ||
            (matrix.children[0].children[i].innerText === pen &&
            matrix.children[1].children[i].innerText === pen &&
            matrix.children[2].children[i].innerText === pen)) {
                return true;
        }
    }
    return false;
}

matrix.addEventListener("click", function(evt) {
    if (evt.target.classList.contains("cell")) {
        if (pen != "") {
            if (evt.target.innerText == "") {
                if (curentPlayer == 1 && user1clicks == 0 && !winner) {
                    user2clicks = 0;
                    evt.target.innerText = pen;
                    displayMessage("SELECT PLAYER !", "next turn is player ", opponent);
                    ++user1clicks;
                } else if (curentPlayer == 2 && user2clicks == 0 && !winner) {
                    user1clicks = 0;
                    evt.target.innerText = pen;
                    displayMessage("SELECT PLAYER !", "next turn is player ", opponent);
                    ++user2clicks;
                } else if (!winner) {
                    displayMessage("WRONG MOVE ! ", "choose player no ", opponent);
                }
                winner = selectWinner(pen);
                if (winner) {
                    displayMessage("Congratulations !!!", "The winner is user ", curentPlayer);
                    alert(`Congratulations user ${curentPlayer} you win !`);
                }
            } else if (!winner) {
                alert("click on an empty box !");
            }
        } else {
            alert("SET USER FIRST !!");
        }
    }
});
