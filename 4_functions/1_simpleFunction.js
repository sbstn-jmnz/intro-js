// begins with the 'function' and then the name of the function
function sum(numA, numB){
  // console.log(arguments)
  var numC = numA + numB
  return numC
}
// When no arguments are passed, the function call undefined + undefined
console.log(sum()) // => Not a Number NaN
// Parameters can vary in number and the function still works 
console.log(sum(1))  
console.log(sum(1,2))

// numC is a local variable of the sum function
//console.log(numC); // This is an error. numC only exists within the function!!
