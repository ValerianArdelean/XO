let game = {
    curentPlayer: 0,
	opponent: 0,
    winner: "",
	pen: "",
    user1clicks: 0,
    user2clicks: 0,
	matrix: document.getElementById("matrix")
};

function createGrid() {
	const gridSize = 3;
	for (let i = 0; i < gridSize; ++i) {
		let row = document.createElement("div");
		row.classList.add("flex", "row");
		for (let j = 0; j < gridSize; ++j) {
			let cell = document.createElement("div");
			cell.classList.add("cell", "text");
			cell.setAttribute("onclick", "userMove(this)");
			row.appendChild(cell);
		}
		game.matrix.appendChild(row);
	}
}

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

function selectWinner(pen) {
    if ((game.matrix.children[0].children[0].innerText === pen &&
		 game.matrix.children[1].children[1].innerText === pen &&
		 game.matrix.children[2].children[2].innerText === pen) ||
        (game.matrix.children[0].children[2].innerText === pen &&
		 game.matrix.children[1].children[1].innerText === pen &&
		 game.matrix.children[2].children[0].innerText === pen)) {
            return true;
    }
    for (let i = 0; i < 3; ++i) {
        if ((game.matrix.children[i].children[0].innerText === pen &&
			 game.matrix.children[i].children[1].innerText === pen &&
			 game.matrix.children[i].children[2].innerText === pen) ||
            (game.matrix.children[0].children[i].innerText === pen &&
			 game.matrix.children[1].children[i].innerText === pen &&
			 game.matrix.children[2].children[i].innerText === pen)) {
                return true;
        }
    }
    return false;
}

function userChoice(id, opp, pn) {
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

function userMove(cell) {
	if (!game.winner) {
		if (game.pen != "") {
			if (cell.textContent == "") {
				if (game.curentPlayer == 1 && game.user1clicks == 0) {
					game.user2clicks = 0;
					cell.textContent = game.pen;
					displayMessage("SELECT PLAYER !", "next turn is player ", game.opponent);
					++game.user1clicks;
				} else if (game.curentPlayer == 2 && game.user2clicks == 0) {
					game.user1clicks = 0;
					cell.textContent = game.pen;
					displayMessage("SELECT PLAYER !", "next turn is player ", game.opponent);
					++game.user2clicks;
				} else {
					displayMessage("WRONG MOVE ! ", "choose player no ", game.opponent);
				}
				game.winner = selectWinner(game.pen);
				if (game.winner) {
					displayMessage("Congratulations !!!", "The winner is user ", game.curentPlayer);
					alert(`Congratulations user ${game.curentPlayer} you win !`);
				}
			} else {
				alert("click on an empty box !");
			}
		} else {
			alert("SET USER FIRST !!");
		}
	}
}
