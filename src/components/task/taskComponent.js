import { deleteTask } from "../../../utils/taskComponentControlling/taskControl.js";
import Task from "../../models/task.js";
import {
    getTask,
    storeTask,
    unstoreTask,
    ifTaskExists,
} from "../../../utils/localStorageHandling/localStorageHandler.js";
import "./style.css";

export default function TaskComponent(projectID, taskID) {
    const parentProjectID = projectID;
    const elementTaskID = taskID;
    const element = document.createElement("div");
    let task = new Task(taskID);
    element.className = "task";
    element.id = taskID;

    // assign existing task if task exists, else store task in local storage
    if (ifTaskExists(taskID) == true) {
        task = getTask(taskID);
    } else {
        storeTask(parentProjectID, elementTaskID, task);
    }

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
    exitButton.addEventListener("click", (e) => {
        toggleExtension();
    });

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

    
    
    // end of task extension elements //



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
    extensionButton.addEventListener("click", (e) => {
        toggleExtension();
    });

    element.append(extensionButton);

    // Delete task button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    deleteButton.className = "deleteButton";
    deleteButton.addEventListener("click", (e) => {
        deleteTask(element.id);
        unstoreTask(parentProjectID, task.getId);
    });

    element.append(deleteButton);

    return element;
}
