
// Mini- Max Sum HackerRam
const minMaxNum = (arr) =>{

  const min = [];
  const max = [];


  for(var i = 0; i < arr.length - 1; i++){
    min.push(arr[i])
  }

  for(var j = 1; j < arr.length; j++){

    max.push(arr[j])

  }

  let minSum = 0;
  let maxSum = 0;

  for (var number of min) {
    minSum += number
  }

  for (var number of max) {
    maxSum += number
  }

  console.log(minSum, maxSum)


}


minMaxNum([7,69,2,221,8974])


// MIN : 1 + 2 + 3 + 4 = 10
// MAX : 2 + 3 + 4 + 5 = 14