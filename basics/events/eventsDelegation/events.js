/* Event delegation

In this tecnic we add the event listener to the parent , and  using the bubbling
we can see a propertie target an know to what the user did click
*/

const books = document.querySelector(".books");

books.addEventListener("click", (event) => {
        /* The object event has a property named target and using it
        we can know where was the click */

  if (event.target) {
    if (event.target.matches(".book-1")) {
      console.log(event.target.innerText, "TO BUY HARRY POTHER https://es.wikipedia.org/wiki/Harry_Potter")
    }
    else {
      console.log(event.target.innerText, "was clicked with (event Delegation)");
    }

  }
})
  