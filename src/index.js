import TaskComponent from "./components/task/taskComponent.js";

const content = document.querySelector("#content");

const taskEx = TaskComponent("123");

console.log(taskEx);

content.appendChild(taskEx);
