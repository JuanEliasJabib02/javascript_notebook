/**
 * What is a Map?
 * 
 * Map object are ordened list with value and key.
 * 
 * A key in the Map may only occur once; it is unique in the Map's collection.
 */

const client = new Map();


// Add element to the map with the method set
client.set("name", "Juan")
client.set("type", "premium")
client.set("money", "poor")



// Return the number of values of the map
console.log(client.size)

// Return true if the value exist and false if dont exist
console.log(client.has("name"))


//Get a value existing in a Map
console.log(client.get("name"))

// delete a value of a map
client.delete("type")

//Delete all the properties of the map
//client.clear()


console.log(client)

//We can initializate a map with values too

const pacient = new Map([["name", "pacient"], ["room", "undefined"]]);

pacient.set("dr", "dr assigned")

console.log(pacient)

//The maps are iterables

pacient.forEach(info => {
  console.log(info)
})