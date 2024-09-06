function sumOfNumber(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

const numbs = [12, 12, 13, 15, 16, 17];

console.log(sumOfNumber(numbs));
