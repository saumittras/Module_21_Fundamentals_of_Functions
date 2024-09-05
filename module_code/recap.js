function doMath(num1, num2) {
  const sum = num1 + num2;
  const diff = num1 - num2;
  const multiply = sum * diff;
  const result = multiply / 2;
  return result, sum, diff;
}
console.log(doMath(34, 23));
const dd = doMath(23, 44);
console.log(dd);
