"use strict";


fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data.filter((user) => user.company.name === "Johns Group")))
  .catch((error) => console.error(error));