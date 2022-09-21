// Given to the function a number and must be printed from 1 to the number
// for number multiple of 3 print BUZZ ,for number multiples of 5 print LIGHYEAR
// for number multipls of 3 and 5 print buzz lightyear


/* 

  INPUT: 10
  OUPUT:

    1 -
    2 -
    BUZZ
    4 -
    LIGHTYEAR
    BUZZ
    7 -
    8 -
    BUZZ
    LIGHTYEAR
    ...
    14 -
    BUZZLIGHTYEAR
 */

  const buzzlighyear = (number) => {
    

    for(let i=1; i <= number; i++){

      if(i % 5 === 0 && i % 3 === 0){
        console.log("BUZZLIGHTYEAR")
      }
      else if(i % 5 === 0 ){
        console.log("LIGHTYEAR")
      }
      else if(i % 3 === 0 ){
        console.log("BUZZ")
      }
      else{
       console.log(i)
      }
      

    }
    


  }



buzzlighyear(1000);