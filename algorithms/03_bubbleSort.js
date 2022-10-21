
/* 
for (let i = 0; i < 10; i++) {

  console.log(`for number ${i}`)
  for (let j = 0; j < 5 - i; j++){
    console.log(`anided for number ${j}`)
  }
  
} */

let array = [9, 1, 3, 4, 2, 5, 7, 6, 8, 10];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
        
      };
    }
    return arr;
  }
}

  console.log(bubbleSort(array));