var boolValue = true
console.log(typeof(boolValue))
var strValue = "true"
console.log(typeof(strValue))

// Boolean operators
// Negative (!)
console.log(!boolValue);
// AND (&&) requires all values to be true, otherwise is false
var result =  boolValue && !boolValue
console.log(result);
// OR (||) requires that at least one is true 
var resultTwo = boolValue || !boolValue
console.log(resultTwo)