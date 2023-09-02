const currentJogadores = document.querySelector(".currentJogadores");

let marcar;
let jogadores = "X";

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function iniciar() {
    marcar = [];

  currentJogadores.innerHTML = `JOGADOR DA VEZ: ${jogadores}`;

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
  marcar[index] = jogadores;

  setTimeout(() => {
    checar();
  }, [100]);

  jogadores = jogadores === "X" ? "O" : "X";
  currentJogadores.innerHTML = `Vez do jogador: ${jogadores}`;
}

function checar() {
  let jogadoresLastMove = jogadores === "X" ? "O" : "X";

  const items = marcar
    .map((item, i) => [item, i])
    .filter((item) => item[0] === jogadoresLastMove)
    .map((item) => item[1]);

  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      document.write("O jogador '" + jogadoresLastMove + "' venceu");
      iniciar();
      return;
    }
  }

  if (marcar.filter((item) => item).length === 9) {
    document.write("ops, empatou legal");
    iniciar();
    return;

  }
}