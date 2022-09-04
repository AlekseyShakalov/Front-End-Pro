"use strict";


// // task_1
// let user = localStorage.getItem("userData");
// if (user) {
//   console.log(JSON.parse(user));
// } else {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => response.json())
//     .then((result) => localStorage.setItem("userData", JSON.stringify(result)))
//     .catch((error) => console.error(error));
// }


// // task_2
// let isValidDateFormat = (str) => {
//   let regexp = /^\d{4}\/\d{2}\/\d{2}\s\d{2}:\d{2}$/;
//   return regexp.test(str);
// }

// console.log(isValidDateFormat("2012/09/18 12:10")); // true
// console.log(isValidDateFormat("12.02.2022 12:10")); // false


// // task_3
// let isAfter = (firstDate, secondDate) => {
//   return firstDate > secondDate;
// }

// console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))); // true
// console.log(isAfter(1648636135000, 1648549735000)); // true
// console.log(isAfter(1648549735000, 1648636135000)); // false