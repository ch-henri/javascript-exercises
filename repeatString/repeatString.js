const repeatString = function(word, times) {

  // times must be positif number.
  if( typeof times != 'number' || times < 0 ) return 'ERROR';

  let string = '';

  for (let i = 0; i < times; i++) {
     string += word;
    }
    
  return string;
}

repeatString('mouffet', 4)
module.exports = repeatString
