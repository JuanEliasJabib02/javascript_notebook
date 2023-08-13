//Weakset

/* Are very simimular to the set
but the difference is that the weakset only
can contain objects.

-The weakset dont have a method .size
-Are not iterable

*/

const weakset = new WeakSet();

const User = {
  email:"juanelias@gmail.com"
}

const name = "juanelias"

weakset.add(User);

//weakset.add(name) // Invalid value used in a weakset because is a string a weakset only accept objects

console.log(weakset.has(User))

console.log(weakset)
