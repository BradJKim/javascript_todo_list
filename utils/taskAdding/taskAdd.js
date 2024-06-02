import TaskComponent from "../../src/components/task/taskComponent";

export default function addTask(){
    const content = document.querySelector("#tasks");

    const newTask = TaskComponent()
    content.appendChild(newTask);

    /* const loadedTaskString = localStorage.getItem(
        `project#${parentProjectID}:task#${task.getId}`
    );

    const loadedTask = JSON.parse(loadedTaskString)
    console.log(loadedTask) */
}