let player = 0, pen = "", clicks1 = 0, clicks2 = 0;

function setPlayer() {
    document.getElementById("user").innerText = `You are user: ${player} playing with ${pen}`;
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
                if (Math.abs(parseInt(clicks1) - parseInt(clicks2)) === 0) {
                    evt.target.innerText = pen;
                }
                ++clicks1;
            } else if (player == 2 && clicks2 == 0) {
                clicks1 = 0;
                if (Math.abs(parseInt(clicks1) - parseInt(clicks2)) === 0) {
                    evt.target.innerText = pen;
                }
                ++clicks2;
            }
            console.log(Math.abs(parseInt(clicks1) - parseInt(clicks2)));

        }
    } else {
        alert("SET USER FIRST !!");
    }
});


