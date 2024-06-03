import { v4 } from "uuid";
import { addTask } from "../utils/taskComponentControlling/taskControll";

const content = document.querySelector("#tasks");

const taskAdderbutton = document.createElement("button");
taskAdderbutton.innerHTML = "Add New Tasks";
taskAdderbutton.addEventListener("click", () => {
    const id = v4();
    addTask("project#123", `task#${id}`);
});
content.appendChild(taskAdderbutton);

// taskAdd handle adding to dom and logging in localstorage

/* const taskEx = TaskComponent();
content.appendChild(taskEx); */
