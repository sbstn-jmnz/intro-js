// Any value you use is of a certain type. JS has the following primitives types

// Numbers

-1
3.14
100

// Strings

"can be with double quotes"
'or single quotes strings'
"It's is my birthday"

// Booleans

true // True  in python
false // False in python

// Undefined: this is the type of variables that are declared but not assigned

var someVar // This is undefined

// Null: used to explicity declare thar a value has no value

null

// Rule of thumb: The js interpreter uses undefined. Developers (us) use null

// Objects are very similar to python dicts

var someObject = {}

someObject['sayHello'] = function(){
  console.log("Hola Mundo");
}

someObject.sayHello()

// Functions

function firstFunction(name){
  console.log("Hola", name);
}

firstFunction('Boolean')