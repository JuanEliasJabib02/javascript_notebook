
/* Exercise : How many times are a word in a phrase  */

const search = (phrase,word) => {

    const phraseL = phrase.toLowerCase().split(" ")
    const wordL = word.toLowerCase()


    let counter = 0;

    for( let i = 0; i < phraseL.length; i++){
        if (phraseL[i].includes(wordL) === true) {
            counter++
        } 
    }

   return console.log(`the word "${word}" is ${counter} times in the phrase`)
    
}

search("Hola soy la frase Hola Hola Hola", "Hola")

