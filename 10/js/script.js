"use strict";


class Employee {
  static sumOfDaysHoliday = 18;

  constructor(firstName, lastName, age, jobPosition, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  calcYearSalary() {
    return this.salary * 12;
  }
}

let employeeJohnson = new Employee("John", "Johnson", 25, "manager", 25000);
console.log(employeeJohnson);
console.log(employeeJohnson.fullName);
console.log(employeeJohnson.calcYearSalary());

let employeeBobson = new Employee("Bob", "Bobson", 33, "driver", 15000);
console.log(employeeBobson);
console.log(employeeBobson.fullName);
console.log(employeeBobson.calcYearSalary()); 