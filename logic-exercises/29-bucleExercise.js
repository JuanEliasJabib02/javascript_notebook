/**
 * Use un bucle para mostrar elementos de una lista dada presente en las posiciones de índice impares
 * 
 *  
 */

const arr = ["Dante", "Messi", "18", "Sanson", "Susi", "gato"];


const list = (arr) => {

  const newArray = [];
  for (let i = 0; i < arr.length; i++) {

    if ((i % 2) !== 0) {
      newArray.push(arr[i])
    }
  }

  return newArray
}

console.log(list(arr))


