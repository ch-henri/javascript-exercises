const sumAll = function(min, max) {
  // check is arguments are interger
  if( !Number.isInteger(min) || !Number.isInteger(max) ) return 'ERROR';

  // check if arguments are greather than 0
  if( min < 0 || max < 0 ) return 'ERROR';

  // Calculate the number of iteration
  let iteration;
  if( min > max ) {
    const temp = max;
    max = min;
    min = temp;
  }
  
  //loop through iteration and increase sum
  let sum = 0;
  for (let i = 0; i <= (max - min); i++) {
    sum += min + i;
  }

 // console.log(sum);
  return sum;
}

//sumAll(123, 1); //10
module.exports = sumAll
