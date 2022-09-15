// the type of data booleans only has two values, true or false


/* In javascript the booleans are used for decide which section code to execute
such as an in if statements or repeat such as in for loops

what is Truthty?

a truthy value is a value that is considered true when is found in a Boolean context

What is falsy

a falsy value is a value that is considered false when is found in  a Boolean context
*/

const auth = false;

/* if(auth === true){
    console.log("you can see netflix")
}else{
    console.log("get a subscription for use netflix")
}
 */

// Good practice for compare booleans 

if(auth){
    console.log("you can see netflix")
}else {
    console.log("get a subscription for use netflix")
}

