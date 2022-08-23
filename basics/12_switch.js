
/* 
    switch

    the switch statements evaluates an expression matching the expression's against a series
    case clauses and executes statements after the first case clause with a  matching value
    until a break statement is encountered. The default clause of a switch will be jumped
    to if no case matches the expression value
 */


/* Syntax */

switch (expression) {
    case value1:
        //Statement executed if value1 and expression matches
        break;
    case value2:
            //Statement executed if value2 and expression matches
        break;
    case valueN:
            //Statement executed if value1 and expression matches
        break;
    default:
        // statement executed none of the values match with the expression
        break;
            
                   
}

/* Ej: */
const paymenthMethod = money;

switch(paymenthMethod){
    case "Money":
        console.log(`you paid with  ${money}`)
            break;
    case "credit":
            console.log(`you paid with  ${credit}`)
         break;
        default:
            console.log("you has't select a payment method")
};