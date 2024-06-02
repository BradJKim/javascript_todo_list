import { deleteTask } from "../../../utils/taskControlling/taskControll.js";
import Task from "../../models/task.js";
import "./style.css";

export default function TaskComponent(taskObject) {
    const element = document.createElement("div");
    const task = taskObject != null ? taskObject : new Task();
    element.className = "task";
    element.id = `task#${task.getId}`;
    
    // function for enabling visibility of task extention
    function toggleExtension() {
        const taskExtension = element.children[0];
        taskExtension.classList.toggle("show");
    }

    // hidden task extension for task details
    const taskExtension = document.createElement("div");
    taskExtension.className = "taskExtension";

    const exitButton = document.createElement("button");
    exitButton.textContent = "exit";
    exitButton.addEventListener('click', (e) => {toggleExtension()})

    taskExtension.appendChild(exitButton);

    // description in hidden task extension
    const dueDate = document.createElement("p");
    dueDate.textContent = "Due: 10/10/25";

    taskExtension.appendChild(dueDate);

    element.append(taskExtension);

    // description in hidden task extension
    const description = document.createElement("p");
    description.textContent = "apple cider";

    taskExtension.appendChild(description);

    element.append(taskExtension);

    // Checkbox to access check property
    const checkBox = document.createElement("input"); // make green if checked
    checkBox.setAttribute("type", "checkbox");
    element.append(checkBox);

    // Displayed Title of task
    const titleHeader = document.createElement("h3");
    titleHeader.innerHTML = task.getTitle;
    element.append(titleHeader);

    // Extension button to enable task extention
    const extensionButton = document.createElement("button");
    extensionButton.innerHTML = "details";
    extensionButton.className = "menuButton";
    extensionButton.addEventListener("click", (e) => {toggleExtension()});
    
    element.append(extensionButton);

    // Delete task button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    deleteButton.className = "deleteButton";
    deleteButton.addEventListener("click", (e) => {deleteTask(element.id)}); 
    
    element.append(deleteButton);

    return element;
}
