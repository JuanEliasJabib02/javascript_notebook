/* 
[0,0],[0,1],[0,2],[0,3],[0,4]X,[0,5] // Where begen the staircase , when the sum of i + j is >= 5
[1,0],[1,1],[1,2],[1,3],X[1,4],[1,5]
[2,0],[2,1],[2,2],X[2,3],[2,4],[2,5]
[3,0],[3,1],X[3,2],[3,3],[3,4],[3,5]
[4,0],X[4,1],[4,2],[4,3],[4,4],[4,5]
X[5,0],[5,1],[5,2],[5,3],[5,4],[5,5]
*/


const staircase = (n) => {
  
  const heigth = n;

  for(let i = 0; i < heigth; i++){
    var staircase = ""

    for(let j = 0; j < heigth; j++){
      if (i + j >= heigth - 1) {
        staircase += "#"
      }else{
        staircase += " "
      } 
      
    }
     console.log(staircase) 
  }

}
 


staircase(6)