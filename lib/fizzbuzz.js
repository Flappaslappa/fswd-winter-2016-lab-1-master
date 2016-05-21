// Write a function that accepts a number (count)
// and returns an array of length count
// where each item in the array follows this pattern:
// if its index (starting from zero) is divisible by three: 'Fizz'
// if its index (again, starting from zero) is divisible by five: 'Buzz'
// if its index is divisible by both three *and* five: 'FizzBuzz'
// otherwise, just the value of the index

// for example:
// fizzBuzz(0) => []
// fizzBuzz(2) => ['FizzBuzz', 1]
// fizzBuzz(7) => ['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz', 'Fizz']

//whhile (i)

function fizzBuzz(count){
  var i = 0;
  var ints = [];
  for(count;i<count; i++){
    if (count === 0){
      break
    }
    else if((i%3 === 0) && (i%5 === 0)){
      ints.push("FizzBuzz")
    }

    else if ((i % 3) === 0){
      ints.push("Fizz")
    }
    else if ((i%5) ===0){
        ints.push("Buzz")
    }
    else {
      ints.push(i)
    }
  }

    return ints;
    //console.log(ints);
}


module.exports = fizzBuzz;
