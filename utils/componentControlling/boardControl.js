import TaskComponent from "../../src/components/task/taskComponent";
import ProjectComponent from "../../src/components/project/projectComponent";

// adds new project to project board
function addProject(projectID) {
    const projectsList = document.querySelector("#projects");

    const newProject = ProjectComponent(projectID);
    projectsList.appendChild(newProject);
}

// iterates through localStorage to find tasks with projectID and loads tasks from local storage to project page
function reloadTasks(projectID) {
    const tasksList = document.querySelector("#tasks");
    let taskNames = [];

    Object.keys(localStorage)
        .filter((taskName) => taskName.startsWith(projectID))
        .forEach((taskName) => {
            const indexOfTask = taskName.lastIndexOf("task");
            taskNames.push(taskName.substring(indexOfTask));
        });

    tasksList.childNodes.forEach((child) => {
        if (child.className == "task"){
            tasksList.removeChild(child);
        }
    });

    taskNames.forEach((taskID) => {
        const loadedTask = TaskComponent(projectID, taskID);
        tasksList.appendChild(loadedTask);
    });
}

// adds task to task board
function addTask(projectID, taskID) {
    const tasksList = document.querySelector("#tasks");

    const newTask = TaskComponent(projectID, taskID);
    tasksList.appendChild(newTask);
}

// deletes task from task board
function deleteTask(taskID) {
    const taskComponent = document.getElementById(taskID);
    taskComponent.remove();
}

function updateTask(projectID, taskID) {}

export { addProject, addTask, deleteTask, reloadTasks, updateTask };
