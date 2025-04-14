// creo array di bici

const bicycles = [
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
    name: "bikeone",
    peso: 25,
  },
  {
    name: "bikefive",
    peso: 38,
  },
];

console.log(bicycles);

// stampiamo le bici con il peso minore

// Calcoli l'elemento con la dimensione minore

let minnumber = bicycles[0]; // object
for (let i = 1; i < bicycles.length; i++) {
  const currentNumber = bicycles[i]; // object
  if (currentNumber.peso < minnumber.peso) {
    minnumber = currentNumber; // object
  }
}

console.log(minnumber);
