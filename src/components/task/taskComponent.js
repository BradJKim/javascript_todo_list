import Task from "../../models/task.js";
import "./style.css";

export default function TaskComponent() {
    const task = new Task();
    const element = document.createElement("div");
    element.className = "taskComponent";
    element.classList.add("task");

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

    return element;
}
