chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (chocolateBars, foo){
  return [foo,...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray (chocolateBars, foo){
  chocolateBars.unshift(foo)
  return chocolateBars 
}

function addElementToEndOfArray (chocolateBars, foo){
  return [...chocolateBars, foo]
}


function destructivelyAddElementToEndOfArray (chocolateBars, foo){
  chocolateBars.push(foo)
  return chocolateBars
}

function accessElementInArray(chocolateBars){
  return chocolateBars[2]
}
array = [1, 2 ,3];
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift(1)
}
