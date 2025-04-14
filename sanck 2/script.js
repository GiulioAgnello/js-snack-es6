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
let newteamGroup = [];
for (const currentteam of footballteam) {
  currentteam.puntiFatti = randomNamber(1, 50);
  currentteam.falliSubiti = randomNamber(1, 50);
  newteamGroup.push(currentteam.nome, currentteam.falliSubiti);
  //   console.log(currentteam.puntiFatti);
  //   console.log(currentteam.falliSubiti);
}
// console.log(footballteam);
console.log(newteamGroup);

// creo nuovo array
