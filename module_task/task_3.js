/**
 * 
 * ask-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

https://github.com/ProgrammingHero1/js-function-practice-tasks
 */

function average(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum / arr.length;
}

const arr = [4, 5, 6, 7, 11, 23, 45, 65];
console.log(average(arr));
