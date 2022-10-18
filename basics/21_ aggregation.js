

// The aggregation is very similar a the asssiociation but

const company = {
  name: "hideshi",
  employees:[]
}

class Person {
  constructor(name, age) {
    this.name = name,
    this.age = age
  }

  eat() {
    console.log(`${this.name} is eating`)
  }
}

const Juan = new Person("Juan", 26);
const Bamba = new Pet("Bamba", 26);

company.employees(Juan);
company.employees(Bamba);