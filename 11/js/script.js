"use strict";


function isWeekend(date) {
  let day = new Date(date).getDay();
  return day === 6 || day === 0;
};


class Person {
  constructor(firstName, lastName, age, birthDayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDayDate = birthDayDate;
  }

  celebrate() {
    return "Happy Birthday, let’s celebrate";
  }
}


class Employee extends Person {
  #salary = 0;
  constructor(firstName, lastName, age, birthDayDate, jobPosition, salary) {
    super(firstName, lastName, age, birthDayDate);
    this.jobPosition = jobPosition;
    this.#salary = salary
  }

  getYearSalary() {
    return this.#salary * 12;
  }

  celebrate() {
    let date = new Date(this.birthDayDate).setFullYear(new Date().getFullYear());
    if (isWeekend(date)) {
      return super.celebrate();
    }
    return "Happy Birthday, but I need to work";
  }
}

let personJohnson = new Person("John", "Johnson", 25, "1996-08-30");
console.log(personJohnson.celebrate());


let employeeBobson = new Employee("Bob", "Bobson", 33, "1989-07-29", "manager", 25000);
console.log(employeeBobson.getYearSalary());
console.log(employeeBobson.celebrate());