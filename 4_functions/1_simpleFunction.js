function sum(numA, numB){
  var numC = numA + numB
  return numC
}
console.log(sum(1,2))

// numC is a local variable of the sum function
console.log(numC); // This is an error. numC only exists within the function!!
