// Give to the function a number and must be return a ladder with [-] with the number as the level of the same

/* Ej:

  [-]
  [-][-]
  [-][-][-]
  [-][-][-]
*/


const ladder = (number) => {

  let ladder = "";

  for (let level = 1; level <= number ; level++){

    let doorsteps = "";
    
      for(let doorstep = 1; doorstep <= level; doorstep++){

          doorsteps+= "[-]";
      }

      ladder += doorsteps + "\n";
  }

  return ladder;

  
} 

console.log(ladder(6))