function isEven(number) {
  const reminder = number % 2;
  if (reminder === 0) {
    return true;
  } else {
    return false;
  }
}
const isEvenOrOdd = isEven(345676);
console.log("My number is Even:", isEvenOrOdd);
