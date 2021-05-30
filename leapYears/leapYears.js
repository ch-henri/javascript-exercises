const leapYears = function(year) {
// is integer
if ( !Number.isInteger(year) ) return false;

// is divisible by 4 AND (not divisible by 100 OR divisible by 400)
if ( year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ) return true
  else return false;

// not divisible by 100 and by 400
}

module.exports = leapYears


// is / 4
// not / 100

// OR

// is / 100 AND /400