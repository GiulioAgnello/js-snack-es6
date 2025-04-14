// creo array di bici

const bicycles = [
  {
    name: "bikeone",
    peso: 25,
  },
  {
    name: "biketwo",
    peso: 35,
  },
  {
    name: "bikethree",
    peso: 52,
  },
  {
    name: "bikefour",
    peso: 43,
  },
  {
    name: "bikefive",
    peso: 38,
  },
];

console.log(bicycles);

// stampiamo le bici con il peso minore

for (const lowweightbyke of bicycles) {
  if (lowweightbyke.peso < 40) {
    console.log(lowweightbyke);
  }
}
