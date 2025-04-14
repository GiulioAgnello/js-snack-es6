// funzioni utili
function randomNamber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// creo array
const footballteam = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Lecce", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Bari", puntiFatti: 0, falliSubiti: 0 },
];

// console.log(footballteam);

// pusho i numeri random

for (const currentteam of footballteam) {
  currentteam.puntiFatti = randomNamber(1, 50);
  currentteam.falliSubiti = randomNamber(1, 50);

  //   console.log(currentteam.puntiFatti);
  //   console.log(currentteam.falliSubiti);
}
console.log(footballteam);

// creo nuovo array

let newteamGroup = [];
