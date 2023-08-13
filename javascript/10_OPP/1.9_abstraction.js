/**
 * What is abstraction?
 *
 * Abstraction is the concept of object-oriented programming that
 * "shows"only essentials attributes and "hides" uncessary information
 * 
 * 
 * -Hide Details
 * -Show Essentials
 * 
 
 */

/* Example */

class Employee {

  constructor(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    this.monthlyBonus = 1000;
  }

  

  getEmpDetails() {
    console.log((`name: ${this.name} | Age: ${this.age}`));
  }

  calculateFinalSalary() {
    let finalSalary = this.baseSalary + montlyBonus;
    console.log(`Final Salary is ${finalSalary}`)

  }
}
              
let employeer1 = new Employee("Juan", 26, 3000);
employeer1.getEmpDetails(); 
employeer1.monthlyBonus = 5000
employeer1.calculateFinalSalary();

