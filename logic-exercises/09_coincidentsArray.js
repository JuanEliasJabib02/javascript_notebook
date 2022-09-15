
// Give to the function 2 arrays and the must be return the items coincidents beetween the arrays


const coincidents = (array1,array2) => {

  
  const filterArray = array1.filter(index => array2.includes(index))

  return console.log(filterArray)


}

coincidents(["cat","dog","cow"],["cow","chicken","dragon"])
