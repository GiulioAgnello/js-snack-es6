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

  const team = currentteam.nome;
  const fouls = currentteam.falliSubiti;

  newteamGroup.push({ team, fouls });
}
// console.log(footballteam);
console.log(newteamGroup);
