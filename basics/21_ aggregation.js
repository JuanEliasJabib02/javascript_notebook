

/* The aggregation is very similar a the asssiociation but 
some objects have a most important roles than others

The object with the major role is named agregate and the objects
that belong to this are called components but anyway everyone 
can be indepent

*/ 

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
const Bamba = new Person("Bamba", 26);

company.employees.push(Juan, Bamba)

company.employees(Juan);
company.employees(Bamba);

console.log(company)