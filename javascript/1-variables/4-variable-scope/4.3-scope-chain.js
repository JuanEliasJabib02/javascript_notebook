/**
 * Scope Chain:
 * 
 * Scope can be layered in a hierarchy, so that child scopes 
 * have access to their parent scope, but not vice versa.
 */
let fruit = "banana";
function eat() {
  let fruit = "apple"
  function Wash() {
    console.log("washing " + fruit)

    /**
     * When occurs shadowing??
     * 
     * Shadowing occurs when there are two variables with the same name in different scopes.
     * In JavaScript, the search is conducted from the lowest level of a nested scope to the higher level scope,
     * and it stops once it finds the first matching variable.   
     * 
     * In these examples, we can observe two variables with the same name "fruit" in different scopes.
     * JavaScript searches from inner to outer scopes. When it encounters the first "fruit" that matches
     * the value "apple," it stops and takes that value. 
     */

  };
  Wash();

}

eat();