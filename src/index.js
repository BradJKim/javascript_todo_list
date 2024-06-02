import addTask from "../utils/taskAdding/taskAdd.js";

const content = document.querySelector("#tasks");

const taskAdderbutton = document.createElement("button");
taskAdderbutton.innerHTML = "Add New Tasks";
taskAdderbutton.addEventListener('click', () => {addTask()});
content.appendChild(taskAdderbutton);

// taskAdd handle adding to dom and logging in localstorage

/* const taskEx = TaskComponent();
content.appendChild(taskEx); */
