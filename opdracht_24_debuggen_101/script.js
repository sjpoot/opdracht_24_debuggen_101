const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
  for (let person of array) {
    console.log(`Dit is de gehele person: ${person}`);
    console.log(`De naam van deze persoon: ${person.name}`);
    console.log(`Het geboorte jaar van ${person.name} is ${2021 - person.age}`);
    console.log(`${person.name} is een ${person.profession}`);
    if (person.age > 50) { console.log(`${person.name} is boven de 50 jaar, namelijk ${person.age}`)};
  }