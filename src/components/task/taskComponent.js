import Task from "../../models/task.js";
import "./style.css";

export default function TaskComponent(projectID) {
    const parentProjectID = projectID;
    const task = new Task();
    const element = document.createElement("div");
    element.className = "task";

    //TODO: handling html component using data from task

    // Simple box with 3 dots
    // expand with description and other info on top of dom
    // click x to get rid of it

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    element.append(checkBox);

    const titleHeader = document.createElement("h3");
    titleHeader.innerHTML = task.getTitle;
    element.append(titleHeader);

    const menuButton = document.createElement("button");
    menuButton.innerHTML = "details";
    element.append(menuButton);

    const taskString = JSON.stringify(task);

    localStorage.setItem(
        `project#${parentProjectID}:task#${task.getId}`, taskString
    );

    /* const loadedTaskString = localStorage.getItem(
        `project#${parentProjectID}:task#${task.getId}`
    );

    const loadedTask = JSON.parse(loadedTaskString)
    console.log(loadedTask) */

    return element;
}
