import TaskComponent from "../../src/components/task/taskComponent";

// iterates through localStorage to find tasks with projectID and loads tasks from local storage to project page
function loadTasks(projectID) {
    const tasksList = document.querySelector("#tasks");
    let taskNames = [];

    Object.keys(localStorage)
        .filter((taskName) => taskName.startsWith(projectID))
        .forEach((taskName) => {
            const indexOfTask = taskName.lastIndexOf("task");
            taskNames.push(taskName.substring(indexOfTask));
        });

    taskNames.forEach((taskID) => {
        const loadedTask = TaskComponent(projectID, taskID);
        tasksList.appendChild(loadedTask);
    });
}

// adds task to project page
function addTask(projectID, taskID) {
    const tasksList = document.querySelector("#tasks");

    const newTask = TaskComponent(projectID, taskID);
    tasksList.appendChild(newTask);
}

// deletes task from project page
function deleteTask(taskID) {
    const taskComponent = document.getElementById(taskID);
    taskComponent.remove();
}

function updateTask(projectID, taskID) {}

export { addTask, deleteTask, loadTasks, updateTask };
