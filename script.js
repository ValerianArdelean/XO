let player = 0, pen = "";

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
    if (pen != "" && evt.target.innerText == "") {
        evt.target.innerText = pen;
    }
});


