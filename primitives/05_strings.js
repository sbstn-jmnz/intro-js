var one = '1'
var two = 2

var result = one + two

console.log(typeof(result));
console.log(result);

// Template strings
// Allow us to inject variables into a string in a simple way
// example

// Without template string
var str = "Hola, este es el resultado: " + result + " con algo adicional de lo que sea" 

// With template strings (backticks)
var str2 = `Hola, este es el resultado: ${result} con algo adicional de lo que sea`

console.log(str);
console.log(str2);

var str3 = `Ejemplo con una expresión: ${1 + 2}`

console.log(str3);

