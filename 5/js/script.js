"use strict";



// // task_1
// let searchString = (originalStr, str) => originalStr.includes(str);
// console.log(searchString("Hello", "llo"));
// console.log(searchString("Hello", "www"));


// // task_2
// let capitalizeFirstLetter = str => `${str[0].toUpperCase()}${str.slice(1)}`;
// console.log(capitalizeFirstLetter("hello")); 
// console.log(capitalizeFirstLetter("HELLO")); 
// console.log(capitalizeFirstLetter("hElLo")); 


// // task_3
// let truncate = (str, maxlength) =>
//   str.length > maxlength ? str.slice(0, maxlength) + "…" : str;
// console.log(truncate("Hello world", 5)); 
// console.log(truncate("Hello world", 25)); 


// // task_4
// let students = [
//   {
//       name: 'John Smith',
//       marks: [10, 8, 6, 9, 8, 7 ]
//   },
//   {
//       name: 'John Doe',
//       marks: [ 9, 8, 7, 6, 7 ]
//   },
//   {
//       name: 'Thomas Anderson',
//       marks: [6, 7, 10, 8 ]
//   },
//   {
//       name: 'Jean-Baptiste Emanuel Zorg',
//       marks: [10, 9, 8, 9 ]
//   }
// ]

// let getAverageMark = (students) => {
//   students.forEach((student) => {
//     let sumOfMarks = student.marks.reduce((sum, current) => sum + current, 0);
//     let averageMark = sumOfMarks / student.marks.length;
//     student.averageMark = averageMark;
//   });
//   return students;
// };
// console.log(getAverageMark(students));


// // task_5
// let vehicles = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
//   { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
//   { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
//   { make: 'Toyota', model: 'Sequoia', type: 'SUV', price: 45560 },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
//   { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
//   { make: 'Ford', model: 'Explorer', type: 'SUV', price: 31660 }
// ];

// let newVehicles = vehicles.filter((item) => item.type.toUpperCase() === "SUV");
// let getAveragePrice = (newVehicles) =>
//   newVehicles.reduce((sum, current) => sum + current.price, 0) /
//   newVehicles.length;
// console.log(getAveragePrice(newVehicles));


// // task_6
// let getKeysCount = obj => Object.keys(obj).length;
// console.log(getKeysCount({ name: 'John' }));
// console.log(getKeysCount({ name: 'John', age: 22 }));
// console.log(getKeysCount({ name: 'John', salary: null }));


// // task_7
// let copySorted = arr => arr.slice().sort((a, b) => a - b);
// let arr = [10, 20, 3, 4, 0, 99, 97];
// let sorted = copySorted(arr);
// console.log(arr); 
// console.log(sorted); 