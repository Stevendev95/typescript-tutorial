"use strict";
// functions
const add = (number1, number2 = 10, number3) => {
    console.log(number1 + number2);
};
add(10);
const minus = (num1, num2) => {
    return num1 - num2;
};
console.log(minus(30, 20));
