function miniMaxSum(arr) {
  // Write your code here
  /* -1  */
  const minSumArray = arr.slice(0, -1)
  const maxSumArray = arr.slice(1)

  const minSum = minSumArray.reduce((acc, currentValue) => acc + currentValue)
  const maxSum = maxSumArray.reduce((acc, currentValue) => acc + currentValue)
    
  return {minSum,maxSum}
}

console.log(miniMaxSum([1,2,3,4,5]))
