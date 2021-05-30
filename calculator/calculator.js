function add (numbers) {
	let args = Array.from(arguments);
  args.filter(item => { if(typeof item !== 'number')  return 'ERROR' } );

  let sum = args.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  console.log(sum);
  
}

add(5, 6,56,6,34,5)

function subtract () {
	
}

function sum () {
	
}

function multiply () {
	
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
