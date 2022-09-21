"use strict";


let albums = document.getElementById("albums");
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((result) => {
    result.map(({ title }) => {
      let li = document.createElement("li");
      let button = document.createElement("button");
      button.innerHTML = "Delete";
      li.append(title, button);
      li.classList.add("album_title");
      albums.append(li);
    });
  })
  .catch((error) => console.error(error));

albums.addEventListener("click", (event) => {
  const isRemoveButton = event.target.nodeName === "BUTTON";

  if (isRemoveButton) {
    const albumTitleBlock = event.target.closest(".album_title");
    albumTitleBlock.remove();
  }
});