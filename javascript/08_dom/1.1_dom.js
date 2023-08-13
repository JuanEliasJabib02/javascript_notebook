/**
 * Dom: Document object model
 * 
 * Are all the elements of a html
 * 
 */

/* Access to the elements in the html */

let element;

element = document;
element = document.body
console.log(element)

/* querySelector : Is a method of the document object that is web page
loaded in the browser and serving as an entry point into the page's content

Able us to select ids and classs, with . we can select class and with # ids

Queryselector return max 1 element
*/

const title = document.querySelector(".title");

const secondTitle = document.querySelector(".title:nth-child(2)")

const id = document.querySelector("#id")
console.log(title)
console.log(secondTitle)
console.log(id)


/* querySelectorAll:

 query selector work in the same way that query selector but this method return all the elements
 comply with the condicion
 */

const list = document.querySelectorAll(".list"); // return all the elements that has the class card
console.log(list)


/* How to change the css */

title.style.backgroundColor = "red";

/* Add new class */

title.classList.add("new-class")


// Traversing the dom


// Delete elements in the dom

/* Exist two ways to delete a element

from the parent or by hisself

*/
// By hisself

id.remove();

