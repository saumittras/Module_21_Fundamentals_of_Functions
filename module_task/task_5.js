/**
 * 
 Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

function odd_even(num) {
  if (num % 2 === 0) {
    return "${num} is an even Number";
  } else if (num % 2 === 1) {
    return " is an odd Number";
  } else {
    return "Invalid Input";
  }
}

console.log(odd_even(120));
