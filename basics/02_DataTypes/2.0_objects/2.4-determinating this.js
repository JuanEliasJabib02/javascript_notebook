/**
 * Determinating this
 * 
 * We musk check in this rules order and stop when the first rule applies
 * 
 * 
 * 
 */

/* 1.Is the function called with new(new binding)? */

const bar = new foo();


/* 2.Is the function called with call or apply(explicit binding) , even hidden inside a bind(hard bidding)*/

const barz = foo.call(obj2);

/* 3.Is the function called with a context(implicit binding), otherwise knownas an owning or containing object? 
"this" is that context object*/

const varz = obj.foo()

/* Otherwise, default the this(default binding).If in stric mode, pick undefined, otherwise is the global object */
const bars = foo()