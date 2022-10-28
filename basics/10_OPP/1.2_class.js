/**
 * Class are a template for creating objects.
 * 
 *
 * */


// Class declaration to create a class

class User {
  constructor(email, password) { // The constructor is a special method 
    this.email = email;          //  for creating a initializing a object maded with a class
    this.password = password;    // There can only be one special method 
  }                              // with the "name" Constructor in a class
  login() { // This is a method of the object
    console.log("login...")
  }
  updateEmail() {
    console.log("updating....")
  }
};
            /* This keyword new do reference to the constructor of the class User */
const Juan = new User("juaneliasjabib02@gmail.com", "4@#21@")

Juan.login();