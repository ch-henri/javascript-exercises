const ftoc = function(far) {
  
  if( !typeof far === 'number' ) return 'ERROR';
  let celsius = (far - 32) * (5 / 9);

  celsius = Math.round(celsius * 10) / 10;

 // console.log(celsius);
 return celsius;
}

const ctof = function(cel) {

  if( !typeof cel === 'number' ) return 'ERROR';
  let far = cel * ( 9 / 5 ) + 32;

  far = Math.round(far * 10) / 10;

  return far;
}

module.exports = {
  ftoc,
  ctof
}
