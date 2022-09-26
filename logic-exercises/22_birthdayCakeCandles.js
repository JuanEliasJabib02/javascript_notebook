/**  // Birthday cake candles hackerram
 * You are in charge of the cake for a child's birthday. 
 * You have decided the cake will have one candle for
 *  each year of their total age. They will only be able to blow out the tallest of the candles. 
 * Count how many candles are tallest.
 */


/* 

INPUT: 

[3,2,1,3]



OUTPUT:

  2 --> in the array are 2 candles of 3 height


*/


const birthdayCakeCandles = (candles) => {

   // Find the max number in the array
   
    let max = Math.max(...candles);

    let counter = 0;

    candles.forEach(candle => {
        if(candle === max) {
          counter++
        }
    });

    return console.log(counter)

}

birthdayCakeCandles([18,90,90,13,90,75,90,8,90,43])