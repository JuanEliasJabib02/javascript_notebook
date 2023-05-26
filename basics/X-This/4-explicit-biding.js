
/* 
Explicit binding of this occurs when.call(), .apply(), or.bind()
Here's how things look:
We call these explicit because you are explicitly passing in a this context to call() or apply(). 
We’ll talk bind() in just a moment.

Here's how things look:

*/
const goku = {
  name: "goku",

  sayHi(screaming, goodbye) {
    const normalHi = `hi my names is  ${this.name}!!`
    const normalGb = "see you later";

    const hi = screaming ?
      normalHi.toUpperCase() : normalHi

    const gb = screaming ?
      normalGb.toUpperCase() : normalGb

    console.log(hi)

    if (goodbye) {
      console.log(gb)
    }
  }
}
/**
* Function.prototype.call()
* Call help us to invocate a function changing his context, in less words
* changint the value of "this"
*/

goku.sayHi(true, true)

const vegeta = {
  name: "vegeta"
}
/** The first parameter is the new context(the object that go to be this and)
* and after the parameters that need the function*/
goku.sayHi.call(vegeta, true, true);

/**
* Since we have .call, we must ignore what appears before the dot in our function call.
* We are using goku object methods and calling it on another this context: runner.
*/


/** Function.prototype.apply():

.apply() is almost the same, except we must pass in an array of 
parameters after our this context.
*/

goku.sayHi.apply(vegeta, [true, true]);


/** Function.prototype.bind():
* 
* When called on a function, .bind() sets a this context and returns 
* a new function of the same name with a bound this context.
* 
* Is difference to apply and call because bind dont execute the function untill
* we need
*/

const newBidingBind = goku.sayHi.bind(vegeta, true, true);

newBidingBind() // is binding to the object that we select

