import { v4 } from "uuid";
import { addTask } from "../utils/taskComponentControlling/taskControl";

const content = document.querySelector("#tasks");

// Button for adding task
const taskAdderbutton = document.createElement("button");
taskAdderbutton.innerHTML = "Add New Tasks";
taskAdderbutton.addEventListener("click", () => {
    const id = v4();
    addTask("project#123", `task#${id}`);
});
content.appendChild(taskAdderbutton);

// loading task components to index




