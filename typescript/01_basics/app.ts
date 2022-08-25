// Core types

/* 
    NUMBERS: 1, 5,3, -10  -> All numbers, no differentiation between integers and float

    STRINGS: "hi",`Hi` 'Hi' -> All texts values

    Booleans : True, False -> Just these two, no "truhty" or "falsy"
 */


const num = ( a: number, b : number, showResult: boolean , phrase:string) => {
    
    const result = a + b;

    if(showResult){
        console.log(phrase + result);
    } else{
        return result;
    }
    return result
}

console.log(num(7,2, true, "result is: "))