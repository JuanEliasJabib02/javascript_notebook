/* 

  Big Os
    
    O(1) Constant - No loops

    O(logN)Logarithmic - usually searching algorithms 
                         have log n if they are sorted(Binary Search)
    
    O(n) Linear - For Loops, while loops, through n items

    O(n log(n)) Log linear - usually sortings operations

    O(^2) Quadratic - Every element in a collection needs to be compared to ever other
                      element, two nested Loops

    O(2^n) Exponencial - recursive algorithms that solves a problem of Size 
    
    O(n!) Factorial - you are adding a loop for every element

    Iterating through half a collection is still O(n)

    two separte collections: O( a * b)


    What can cause time in a function?

    Operation(+,-,*,/)
    Comparisons(<,>,==)
    Looping(for,while)
    outside function call(function())


    RULE BOOOK

    Rule 1: always worst case
    Rule 2: Remove constants
    Rule 3:
      -Different inputs should have different variables O(a+b)
      -A and B arrays nested would be : O (a*b)
      -for steps in order
      - for nested steps


    Rule 4: Drop-Non-dominant terms


    WHAT CAUSES SPACE COMPLEXITY
    
    - Variables
    - Data structures
    - Function Call
    - Allocations
  
 */




 const fish = ["nemo"]

 const arrayOfFishs = new Array(1000).fill("nemo")

 const findNemo = (array) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === "nemo"){
          console.log("found Nemo")
        }
    }
 }

 /* findNemo(fish) */; // O(n) --> Linear time


 const boxes = [0,1,2,3,4,5]

 const logFirstTwoBoxes = boxes => {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); //O(2)