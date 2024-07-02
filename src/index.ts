// functions

const add = (number1: number, number2: number = 10, number3?: number) => {
  console.log(number1 + number2);
};

add(10);

const minus = (num1: number, num2: number): number => {
  return num1 - num2;
};

console.log(minus(30, 20));
