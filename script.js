let game = {
    curentPlayer: 0,
    winner: "",
    opponent: 0,
    user1clicks: 0,
    user2clicks: 0,
    pen: ""
};

function displayMessage(status, action, data) {
    document.getElementById("message1").innerText = status;
    document.getElementById("message2").innerText = action + data;
}

function styleButtons(button1, button2) {
    button1.style.background = "#91C8D3";
    button1.style.color = "white";
    button2.style.background = 0;
    button2.style.color = "black";
}

function user(id, opp, pn) {
    if (!game.winner) {
        let clicks = id == 2 ? game.user2clicks : game.user1clicks;
        if (clicks > 0) {
            alert("don't try on cheating");
        } else {
            game.curentPlayer = id;
            game.opponent = parseInt(opp);
            game.pen = pn;
            displayMessage(`player ${game.curentPlayer} is set !`, "you are playing with ", game.pen);
            styleButtons(document.getElementById(id), document.getElementById(game.opponent));
        }
    }
}

let matrix = document.getElementById("matrix");

function selectWinner(pen) {
    if ((matrix.children[0].children[0].innerText === pen &&
         matrix.children[1].children[1].innerText === pen &&
         matrix.children[2].children[2].innerText === pen) ||
        (matrix.children[0].children[2].innerText === pen &&
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
        if (game.pen != "") {
            if (evt.target.innerText == "") {
                if (game.curentPlayer == 1 && game.user1clicks == 0 && !game.winner) {
                    game.user2clicks = 0;
                    evt.target.innerText = game.pen;
                    displayMessage("SELECT PLAYER !", "next turn is player ", game.opponent);
                    ++game.user1clicks;
                } else if (game.curentPlayer == 2 && game.user2clicks == 0 && !game.winner) {
                    game.user1clicks = 0;
                    evt.target.innerText = game.pen;
                    displayMessage("SELECT PLAYER !", "next turn is player ", game.opponent);
                    ++game.user2clicks;
                } else if (!game.winner) {
                    displayMessage("WRONG MOVE ! ", "choose player no ", game.opponent);
                }
                game.winner = selectWinner(game.pen);
                if (game.winner) {
                    displayMessage("Congratulations !!!", "The winner is user ", game.curentPlayer);
                    alert(`Congratulations user ${game.curentPlayer} you win !`);
                }
            } else if (!game.winner) {
                alert("click on an empty box !");
            }
        } else {
            alert("SET USER FIRST !!");
        }
    }
});
