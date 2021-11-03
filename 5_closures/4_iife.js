// Immediately invoked function expression

var someObject = {}

someObject.counter = (function(){
  var counter = 0
  return function(){
    counter++
    console.log("El numero de veces va en ", counter);
  }
})()

someObject.counter()
someObject.counter()