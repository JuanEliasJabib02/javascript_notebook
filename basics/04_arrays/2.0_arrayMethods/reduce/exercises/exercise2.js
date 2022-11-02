// Count people using a reduce

const people = [
  {
    id: 1,
    name: "Juan Elias",
    age:26
  },
  {
    id: 2,
    name: "Samir Elias",
    age:26,
  },
  {
    id: 3,
    name: "Alba Caro",
    age:50
  },
  {
    id: 4,
    name: "Juan Jabib",
    age:63,
  },
]

// Count people using reduce

const result = people.reduce((acc, people) => acc + 1, 0);

// Sum ages using reduce

const sumAges = people.reduce((acc, people) => acc += people.age, 0);
// Array of names

const arrayNames = people.reduce((acc, people) => [...acc, people.name], []);


// Convert array to a diccionary 
const resultId = people.reduce((acc, person) => { 
  return {...acc, [person.id]: person }
}, {})

// Max age

const maxAge = people.reduce((acc, person) => {

  if (acc === null || person.age > acc) {
    return person.age
  }

  return acc;
}, null)

//Min age
const minAge = people.reduce((acc, person) => {

  if (acc === null || person.age < acc) {
    return person.age
  }

  return acc;
}, null)


//Find by name ( to alba)

const findByName = people.reduce((acc, person) => {

  if (acc !== null) return acc;

  if (person.name === "Alba Caro") return person;

  return null;
}, null);


//All over 18

const allOver18 = people.reduce((acc, person) => {

  if (!acc) return false;
  return person.age > 24;

}, true);

console.log(allOver18);



