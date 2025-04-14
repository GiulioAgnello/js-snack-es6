// creo array di bici

const bicycles = [];

const bikeone = {
  name: "one",
  peso: 25,
};
const biketwo = {
  name: "two",
  peso: 35,
};
const bikethree = {
  name: "three",
  peso: 52,
};
const bikefour = {
  name: "four",
  peso: 43,
};
const bikefive = {
  name: "five",
  peso: 38,
};

bicycles.push(bikeone);
bicycles.push(biketwo);
bicycles.push(bikethree);
bicycles.push(bikefour);
bicycles.push(bikefive);

console.log(bicycles);

// stampiamo le bici con il peso minore

for (const lowweightbyke of bicycles) {
  if (bicycles[1].peso <= 40) {
    console.log(lowweightbyke);
  }
}
