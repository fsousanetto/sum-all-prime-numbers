const primeNumbers = new Array(); 

const sumAll = () => {
    var sumArray = primeNumbers.reduce((accumulator, value) => {
        accumulator += value;
        return accumulator;
      }, 0);

      console.log(sumArray)
  }

const main = (limit) => {
  for (let number = 2; number <= limit; number++) {
    let prime = true;

    for (let divisor = 2; divisor < number; divisor++) {
      if (number % divisor === 0) {
        prime = false;
        break;
      }
    }

    if (prime) {
      primeNumbers.push(number);
    }
  }
  return sumAll() 
};

main(1000); 
