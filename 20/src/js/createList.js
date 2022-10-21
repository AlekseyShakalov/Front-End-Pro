export let createList = (value) => {
  let li = document.createElement("li");
  let button = document.createElement("button");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  button.innerHTML = "Delete";
  li.append(checkbox, value, button);
  return li;
};