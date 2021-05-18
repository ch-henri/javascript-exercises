const reverseString = function(string) {

  // put string into a array
  let array = string.split('');
  //console.log(string, array);
  
  // reverse array
  let reversedArray = array.reverse();
  //console.log( reversedArray);

  // join in back as string 
  let reversedString = reversedArray.join('');
  //console.log( reversedString);

  return reversedString;
}


module.exports = reverseString
