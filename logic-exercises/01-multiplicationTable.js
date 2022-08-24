// Give to the function a number and must be returned the mutiplication table


const table = (number) => {

    let result = `#multiplication table of ${number} \n \n`;
    
    for (let i = 0; i <= 10 ; i ++) {
        result += `${number} x ${i} = ${number * i} \n`
    }
    
    return  result
}

console.log(table(6))