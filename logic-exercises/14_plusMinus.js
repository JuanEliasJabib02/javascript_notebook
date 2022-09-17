
/* Given an array of integers, calculate the ratios of its elements that are positive,
 negative, and zero. Print the decimal value of each fraction on a new line 
 with 6  places after the decimal
 
 . */

 
const plusMinus = (arr) => {

    
  // Know the array length

  const positives = [];

  const negatives = [];
  
  const zeros = [];

  for(let i = 0; i < arr.length; i++){

    if(Math.sign(arr[i]) === 1){
      positives.push([arr[i]])
    } else if(Math.sign(arr[i]) === -1){
      negatives.push([arr[i]])
    } else if (Math.sign(arr[i]) === 0){
      zeros.push([arr[i]])
    }
    
  }
  // Count the positive numbers and negative numbers and zeros
 // Divide the count of + numbers and - numbers an zero between the length of the array
    const positiveNumbers = positives.length / arr.length;

    const negativeNumbers = negatives.length / arr.length;

    const zeroNumbers = zeros.length / arr.length;

    console.log(positiveNumbers.toFixed(6))
    console.log(negativeNumbers.toFixed(6))
    console.log(zeroNumbers.toFixed(6))

}


plusMinus([-4,3,-9,0,4,1])

