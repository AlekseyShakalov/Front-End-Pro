"use strict";


// // task_1
// function sumTwoSmallestNumbers(...args) {
//   if (args.length < 2) {
//     return console.error("You must enter at least 2 numbers");
//   }
//   let sortedArray = args.sort((a, b) => a - b);
//   return sortedArray[0] + sortedArray[1];
// } 

// console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
// console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
// console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")


// // task_2
// let createCalculator = number => {
//   let result = number;
//   return {
//     sum: n => result += n,
//     mult: n => result *= n,
//     sub: n => result -= n,
//     div: n => result /= n
//   }
// }

// const calc = createCalculator(10);

// console.log(calc.sum(5)); /// 15
// console.log(calc.mult(10)); // 150
// console.log(calc.sub(40)); // 110
// console.log(calc.div(10)); // 11