"use strict";


let albums = document.getElementById("albums");
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((result) => {
    result.map(({title}) => {
      let li = document.createElement("li");
      li.append(title);
      li.classList.add("album_title");
      albums.append(li);
    })
  })
  .catch((error) => console.error(error));