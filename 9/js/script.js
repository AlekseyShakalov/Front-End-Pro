"use strict";


// // task_1
// let myBirthday = new Date("1996-08-30")
// console.log(`${myBirthday.getDate()}.0${myBirthday.getMonth() + 1}.${myBirthday.getFullYear()}`)


// // task_2
// let getDiffDays = (firstDate, secondDate) => {
//   let startDate = new Date(firstDate);
//   let endDate = new Date(secondDate);
//   const DAYS_TO_MILLISECONDS = 86400000;
//   if (isNaN(startDate) || isNaN(endDate)) {
//     return console.error("Error: invalid date");
//   } else if (startDate > endDate) {
//     return console.error("Error: your start date is later than end");
//   }
//   return (endDate - startDate) / DAYS_TO_MILLISECONDS;
// };

// console.log(getDiffDays('2020-01-01', '2020-01-17')); // 16
// console.log(getDiffDays('2020-01-01', '2020-03-15')); // 74
// console.log(getDiffDays('2222222222', '2020-03-15')); // Error: invalid date
// console.log(getDiffDays('2021-01-02', '2020-03-15')); // Error: your start date is later than end


// // task_3
// let isWeekend = date => {
//   let day = new Date(date).getDay();
//   return day === 6 || day === 0;
// };

// console.log(isWeekend('2022-02-12')); // true
// console.log(isWeekend('2022-02-13')); // true
// console.log(isWeekend('2022-02-09')); // false


// // task_4
// const person = {
//   fullName: 'Sherlock Holmes',
//   address: {
//     street: "Baker Street",
//     city: "London",
//     house: "221b"
//   }
// }

// let json = JSON.stringify(person);
// console.log(json);
// let parsedPerson = JSON.parse(json);
// console.log(parsedPerson);
// let {fullName, address: {street, city, house}} = person;
// console.log(`${fullName}, ${street}, ${city}, ${house}`);