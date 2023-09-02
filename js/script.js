 const currentPlayer = document.querySelector(".currentPlayer");

let clicar;
let jogadores = "M";

let linhas = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
[1, 4, 7],
[2, 5, 8],
[3, 6, 9],
[3, 5, 7],
];

function inicar() {
    clicar =[];

    currentPlayer.innerHTML = 'vez do: $(jogadores)';
    document.querySelectorAll(".velha button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
    });
}

iniciar();

function newMove(e) {
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = jogadores;
    e.target.removeEventListener("click", newMove);
    clicar[index] = jogadores;

    setTempoesgotado(() => {
        check();
    }, [100]);

    jogadores = jogadores === "M" ? "O" : "M";
    currentPlayer.innerHTML = 'vez de: $(jogadores)';
}

function marcar() {
    let jogadoresLastMove = jogadores === "M" ? "O" : "M";

    const items = clicar 
    .map((item, i) => [item, i])
    .filter((item) => item[0] === jogadoresLastMove)
    .map((item) => item[1]);

    for (pos of positions) {
        if (pos.every((item) => items.includes(item))){
            alert(" venceu o jogador ' " + jogadoresLastMove + " ' ganhou");
            iniciar();
            return;
        }
    }
    if (clicar.filter((item) => item).length === 9) {
        alert("empatou");
        inicar();
        return;
    }
}