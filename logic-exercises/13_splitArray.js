// Give to the function an array and number and split it for the number

/* Ej:
  splitArray([7,8,9,10,5],3)

  // Return
  [[7,8]], [9,10], [5]
*/

const splitArray = (array,number) => {
  
  const result = [];

  for(let element of array) {
    
    let lastIndex = result[result.length - 1 ]
    
    if(!lastIndex || lastIndex.length === number){
      result.push([element]);
    } else {
      lastIndex.push(element);
    }
  }

  console.log(result);

}


splitArray([1,2,3,4,5,6],1)