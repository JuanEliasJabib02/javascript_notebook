/**
 * Encapsulation
 * 
 * When we speak about encapsulation we are a talking of encapsulate data and functions
 * hiding the internal details
 * 
 * The objective of this is simplify the use of an object and simplicate the change of
 * internal coude, but the ouput have to be the same 
 * 
 */


/* We have this constructor  */
function Company(name) {

  // The programmer dont have direct access to this variable employees
  let employees = [];
  this.name = name

  this.getEmployees = function () {
    return employees
  }

  /**
 *  A example of encapsulation is a method
 */

  this.addEmployes = function (employee) {
    employees.push(employee)
  }
}

/* So now we created two companys using our constructor  Company */


const hideshi = new Company("hideshi");
const blxckdxy = new Company("blxckdxy");

console.log(hideshi.employees)
console.log(blxckdxy)

/* We can see that the propertye employees dont exist is undefined so, how we can
add employees to the Company? */


/* We can use a method, the user dont have acess to the employees but we can give him
acesss to a method to add employees that is encapsulation the user dont know how the method
work but can use it */

hideshi.addEmployes("Bamba Hideshi");
blxckdxy.addEmployes("Zoro blxckdxy");

/* And we can give him a method for see the employers  */

/* If the code inside the method change it not matters because 
the output of the method will be still the same, so is a obvious example
of encapsulation because the user dont need to writer the code only use a method for it,
do the work more easy, and if we need to refactor the coode we can do it only without affect
the app because the result of that module , method ect.. will be still the same.
 */

console.log(hideshi.getEmployees());
console.log(blxckdxy.getEmployees());