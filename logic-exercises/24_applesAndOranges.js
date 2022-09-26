/**
 * Hacker ram -- APLES AND ORANGES
 * 
 * INPUT
 * 
 * 
 *  S =  7 // Init house distance
 *  t = 11 // Finish house distance
 *  a = 5 // apples location
 *  b = 15 // oranges location
 *  apples = [2,3, -4]
 *  oranges = [ 3, -2, -4]
 *
 * OUTPUT
 * 
 */


const countApplesAndOranges = (s, t, a, b, apples, oranges) => {

  let apples_counter = 0;
  let oranges_counter =0;
  
  apples.forEach(apple => {
    if((apple + a) >= s && (apple  + a) <= t){
      apples_counter++;
    }
  });

  oranges.forEach(orange => {

    if((orange + b) >= s && (orange + b) <= t) {
      oranges_counter++;
    }
    
  });

  console.log(apples_counter);
  console.log(oranges_counter);



  // Loop oranges

}


countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]);