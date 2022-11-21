/**
 *  Os Module:
 * 
 * This module provide us a lot of interesting properties and 
 * methods for interacting with operating system as well as the 
 * server
 * 
 */

 const os = require("os"); 

 //Info about current user
 const user = os.userInfo();
 
 
 //Method return the system uptime in seconds
 
 console.log(`The system uptime is ${os.uptime} seconds`);
 
 const currentOS = {
   name: os.type(),
   release: os.release(),
   totalMemory: os.totalmem(),
   freeMemory: os.freemem(),
 }
 console.log(currentOS)