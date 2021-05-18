const removeFromArray = function(array, args) {
  
  // get the first argument which is the array.
  array = arguments[0];

  let newArray = [];
  
  // create array from function arguments.
  let argsList = Array.from(arguments);

  //remove first element which is the array.
  argsList.shift();

  newArray = array.filter(function(elm){
    return !(argsList.includes(elm));
  })

  return newArray;
}


//removeFromArray(['1','2','3'], '2', '3');

module.exports = removeFromArray
