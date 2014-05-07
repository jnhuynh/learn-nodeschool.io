// console.log(process.argv);

var argumentsPassedToCommand = [],
    sum, i;

// Actual arguments start at index 2.
for(i = 2; i < process.argv.length; i++) {
  argumentsPassedToCommand.push(Number(process.argv[i]));
}

sum = argumentsPassedToCommand.reduce(function(previousSum, number, index, array) {
  var currentSum = previousSum + number;

  // console.log("" + previousSum + " + " + number + "=" + currentSum);

  return currentSum;
}, 0);

console.log(sum);
