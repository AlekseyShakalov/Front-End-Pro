"use strict";


fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    let user = data.find(({ company: { name } }) => name === "Johns Group");
    return console.log(user);
  })
  .catch((error) => console.error(error));