function onlyNumbers(elem){
  return typeof(elem) == 'number' && !isNaN(elem)
}

function accumulate(acc, next){
  return acc + next
}

function megaSum(){
  var argArray = Array.from(arguments) 
  return argArray.filter(onlyNumbers).reduce(accumulate)
}

console.log(megaSum(1,5,3,3)) //12
