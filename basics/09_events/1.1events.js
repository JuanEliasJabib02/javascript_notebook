/* 
 When a event occures, 3 phases are produced
 
 The first phase es Capture:

 In this phase is searching for the element on the dom
 more deep where was procuded the event.


 The second phase is the target:

 In this phase is check if the element of the doom where was localizated the event
 has a listener assiocied to it

 And the third phase is the bubbling:

  The bubbling not always occures, not all the events have this phase depends of the type
  of the event.

  This event when the target execute the envent, start to search if the elements parents
  have exist a listener for the same type de event and execute it too
*/


//Ways to avoid the event bubbling


/* Are 3 ways to prevent the event bubbling */

const zone1 = document.querySelector(".zone-1")
const zone2 = document.querySelector(".zone-2")
const zone3 = document.querySelector(".zone-3")
const zone_main = document.querySelector(".main-zone")


/* We have this four events 
*/
zone_main.addEventListener("click", () => {
  console.log("click on main - zone")
})

/* How the zones are part o main zone it appears the event bubbling
  and this is a problem to avoid.
 */

zone1.addEventListener("click", (e) => {
  e.stopPropagation();/* Using the method stopPropagtion we can stop the event bubling */
  console.log("click on zone 1")

})
/*
 The second way to stop it is using delegation

 Using the bubbling effect we can know what was the element that the user did click 
  */
zone2.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click on zone 2")

})

zone3.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click on zone 3")

})

