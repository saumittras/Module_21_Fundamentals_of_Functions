// define a function , which return all the even numbers of an array

function evenNumbers(array) {
  const evenArray = [];

  for (const evennum of array) {
    if (evennum % 2 === 0) {
      evenArray.unshift(evennum);
    }
  }
  return evenArray;
}

const testArray = [1, 2, 4, 5, 6, 8, 9, 11, 12, 13, 14, 15, 16];

console.log(evenNumbers(testArray));
