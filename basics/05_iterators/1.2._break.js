/**
 * break:
 * 
 * The break statement terminates the current loop,
 * switch, or label statement and transfers program control to 
 * the statement following the terminated statement.
 */

for (let i  = 0; i <= 10; i++) {
  if (i === 5) {
    console.log("this is the 5")
    break; // For stop the execution of the forloop
  }
  console.log(`Number: ${i}`)
};

