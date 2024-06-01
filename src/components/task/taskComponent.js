import Task from "../../models/task.js";
import "./style.css";

export default function TaskComponent() {
    const task = new Task();
    const element = document.createElement('div');
    element.className="taskComponent";

    //TODO: handling html component using data from task

    // Simple box with 3 dots
    // expand with description and other info
    // click x to get rid of it

    return element;
}
