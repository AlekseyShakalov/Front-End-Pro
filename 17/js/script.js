"use strict";


let list = document.getElementById("list");
let form = document.querySelector("form");
let input = form.querySelector("input");

let errorMessage = document.createElement("span");
form.append(errorMessage);

form.onsubmit = (event) => {
  event.preventDefault();
  if (input.value.trim().length !== 0) {
    list.append(createList(input.value));
    input.value = "";
    return;
  } else {
    input.classList.add("error");
    errorMessage.innerHTML = "Please, enter text";
    return;
  }
};

input.oninput = () => {
  let isErrorField = input.classList.contains("error");
  if (isErrorField) {
    input.classList.remove("error");
    errorMessage.innerHTML = "";
  }
};

let createList = (value) => {
  let li = document.createElement("li");
  let button = document.createElement("button");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  button.innerHTML = "Delete";
  li.append(checkbox, value, button);
  return li;
};

list.addEventListener("click", (event) => {
  let isRemoveButton = event.target.nodeName === "BUTTON";
  if (isRemoveButton) {
    event.target.closest("li").remove();
  }
});

list.onchange = (event) => {
  let isChecked = event.target.nodeName === "INPUT";
  if (isChecked) {
    let li = event.target.closest("li");
    li.classList.add("checked");
    li.querySelector("input").setAttribute("disabled", "true");
    li.querySelector("button").setAttribute("disabled", "true");
  }
};