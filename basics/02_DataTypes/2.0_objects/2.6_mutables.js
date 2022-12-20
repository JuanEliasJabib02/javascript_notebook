/**
 * Inmutable:
 *    -Mean that the values can't change , the primitive javascript datatypes are
 * inmutables : Strings,Nulls,Booleans,Number,Symbol,Undefined,bigInt
 * Mutable:
 *    -Values can change  
 * Javascript datatypes mutables are: Objects
 */


let Object = {

  propertie1: "value1",
  propertie2: "value2"
}

Object.propertie1 = "isMutable"
Object.newProperty = "isMustable_2"
console.log(Object);