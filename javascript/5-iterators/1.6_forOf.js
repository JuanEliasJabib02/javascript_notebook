/**
 * For of
 * 
 * The for...of statement executes a loop that operates on a sequence 
 * of values sourced from an iterable object.
 */

/*  SYNTAX
for (variable of iterable){
  statement
}
 */

 const array1 = ['a', 'b', 'c'];

 for (const element of array1) {
   console.log(element);
};
 
 // expected output: "a"
 // expected output: "b"
 // expected output: "c"
 