const citys = ["Londres", "Paris", "Medellin"];

const orders = new Set([11, 23, 45, 102]);

const data = new Map();
data.set("name", "Juan");
data.set("profession", "Web developments");


//Default iterator --> Depend of the object iterating if is array,set,map ect...

for (let order of orders) {
  console.log(citys)
}


// Entries iterator // Return keys and value both of them
for (let entry of citys.entries()) {
  console.log(entry); 
}

// Values iterator // Return only the value

for (let value of citys.values()) {
  console.log(value)
}


// Keys iterator // return only the key

for (let keys of citys.keys()) {
  console.log(keys)
}