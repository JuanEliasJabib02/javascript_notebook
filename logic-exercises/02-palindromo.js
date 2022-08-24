
//give the function a string and this must be returned if the string is palindrome or not


const palindrome = (string) => {
    const stringSplit = string.split("");
    const reverseArray = stringSplit.reverse();
    const reverseString = reverseArray.join("")

    let result = `the word ${string} `;

    if(string === reverseString) {
        result+= `is a PALINDROME`
    } else {
       result+=`is NOT a palindrome`
    }

    return result;
}

console.log(palindrome("radar"))