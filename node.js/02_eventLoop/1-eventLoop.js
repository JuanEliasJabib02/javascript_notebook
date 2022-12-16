/**
 * What is the Event Loop?
 * 
 * The event loop is what allows node.js to perform non-blocking I/O operations
 * by offloading operations to the system kernel whenever possible.
 * 
 * The event loop has only 1 job, look  at the stack and look at task queue.
 * 
 * If the stack is empty it take the first thing on the queue
 * and pushes it on to the stack which effectively run it
 */

console.log("first task")

setTimeout(() => {
  console.log("executing from the task queue")
}, 0) 
/* If we use a 0 delay if because we want to use the event loop 
to defer the exececution of code for whatever reason to the 
untill the stack is clear */


console.log("second task")