 
/* If Else 

The if statement a statement if a  specified condition is truthy, if the condition is falsy
another statement in the opcional else clause will be executed

*/

let condition = false

if(condition){
   console.log("is truthy so we are in this section of code")
} else {
   console.log("is falsy so we are in this section of code")
}

 /* Operator &&(AND) */
 
 const email = false;
 const password = true;

 if( email && password) {
   console.log("sign up sucessful")
 }else if (!email && !password) {
   console.log("email and password wrong")
 } else if (!email){
      console.log("wrong email")
 } else if(!password){
      console.log("wrong password")
 } 


 /* Operator OR */
 

const money = 49;
const credit = 100;
const available = money + credit
const totalToPay = 150;

if(money > totalToPay || credit > totalToPay || available >= totalToPay) {
   console.log("purchased successfull")
} else {
   console.log("insufficient money for the purchase")
}


// Good practique with return to stop a if statements is executed 

const points = 300;

const isWin = () =>{

   if(points > 320){
      console.log("You won the game")
      return; 
   }

   if(points > 250){+
      console.log("You lost  the game")
      return;
   }

}

isWin();



