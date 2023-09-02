 const currentPlayer = document.querySelector(".currentPlayer");

let selected;
let player = "M";

let linhas = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
[1, 4, 7],
[2, 5, 8],
[3, 6, 9],
[3, 5, 7],
];

function init() {
    selected =[];

    currentPlayer.innerHTML = 'vez de: $(player)';
    document.querySelectorAll(".velha button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
    });
}

init();

function newMove(e) {
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = player;
    e.target.removeEventListener("click", newMove);
    selected[index] = player;

    setTimeout(() => {
        check();
    }, [100]);

    player = player === "M" ? "O" : "M";
    currentPlayer.innerHTML = `vez de: $(player)`;
}

function check() {
    let playerLastMove = jogadores === "M" ? "O" : "M";

    const items = selected 
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

    for (pos of positions) {
        if (pos.every((item) => items.includes(item))){
            alert(" venceu o jogador ' " + playerLastMove + " ' ganhou");
            init();
            return;
        }
    }
    if (selected.filter((item) => item).length === 9) {
        alert("empatou");
        init();
        return;
    }
}