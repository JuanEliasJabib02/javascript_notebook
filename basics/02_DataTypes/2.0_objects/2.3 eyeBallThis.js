/* How to Eyeball Your ‘This’ Context in Javascript */

/**
 * 
 * This is all about where a function is invoked. Often, 
 * early programmers worry about where the function was declared. 
 * Perhaps the function was declared in a specific file or a particular object.
 *  Surely this changes it's this!To understand this, we need to see where
 *  it is invoked. Nothing else matters, with one exception which we'll cover in a moment.
 * 
 * First, let’s go through the different ways that this can be assigned in Javascript.
 */


/**
 * Implicit Binding
Implicit binding occurs when dot notation is used to invoke a function.
 */

/* Example */
