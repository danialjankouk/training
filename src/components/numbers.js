export const numbersCreator = (value) => {
  const numbers = [];
  if (!value) {
    for (let i = 100; i > 0; i--) {
      numbers.push(i);
    }
  } else {
    for (let i = value; i > 0; i--) {
      numbers.push(i);
    }
  }
  return numbers;
};
