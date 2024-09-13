/**
 * 
Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */

function count_zero(str) {
  let countZero = 0;
  for (const num of str) {
    if (num === "0") {
      countZero++;
    }
  }
  return countZero;
}

console.log(count_zero("010101011100001110000001111100010101"));
