const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printFibonacci(number) {
  if (isNaN(number)) {
    return 'only natural numbers are allowed';
  }
  if (Number.isInteger(number)) {
    if (number <= 0) {
      return 'only natural numbers are allowed';
    }
    if (number === 1) {
      return [0];
    }
    if (number === 2) {
      return [0, 1];
    }
    const fibonacciArray = [0, 1];
    let operand1;
    let operand2;
    let i = 0;
    do {
      operand1 = fibonacciArray[i];
      operand2 = fibonacciArray[i + 1];
      fibonacciArray.push(operand1 + operand2);
      i += 1;
    } while (i < (number - 2));

    return fibonacciArray;
  }
  return 'only natural numbers are allowed';
}

readline.question('Enter the number\n', (number) => {
  const x = Number(number);
  console.log(printFibonacci(x));
  readline.close();
});

module.exports = printFibonacci;
