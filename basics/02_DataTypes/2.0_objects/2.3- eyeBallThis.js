/**
 * Eyeballing ThisYou'll notice that none of these rules require
 *  too much work.Is there a dot? Look to the left. That's this.
 * Do you see .call() or .apply()? What's passed in before the first comma? Thats this.
 * Does the function stand alone when it's invoked? Then what's your global context? 
 * That's this.These three rules-of-thumb point to the most important rule of all: 
 * this refers to a function's callsite (where it is invoked).

.bind() – The Exception

Unfortunately, .bind() complicates matters a bit.

When called on a function, .bind() sets a this context and returns a new function
 of the same name with a bound this context.
 */

