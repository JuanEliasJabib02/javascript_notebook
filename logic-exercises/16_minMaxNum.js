function miniMaxSum(arr) {
  // Write your code here
  /* -1 penultimate value in my array  */

  /* First organize the array from minor to max number  */
  arr.sort( (a,b) => a - b)
  const minSumArray = arr.slice(0, -1)
  const maxSumArray = arr.slice(1)

  const minSum = minSumArray.reduce((acc, currentValue) => acc + currentValue)
  const maxSum = maxSumArray.reduce((acc, currentValue) => acc + currentValue)
    
  return {minSum,maxSum}
}

console.log(miniMaxSum([7,69,2,221,8974]))
