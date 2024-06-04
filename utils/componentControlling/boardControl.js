import TaskComponent from "../../src/components/task/taskComponent";
import ProjectComponent from "../../src/components/project/projectComponent";
import { getProjects, getTasks } from "../localStorageHandling/localStorageHandler";

// adds new project to project board
function addProject(projectID) {
    const projectsList = document.querySelector("#projects");

    const newProject = ProjectComponent(projectID);
    projectsList.insertBefore(newProject, projectsList.children[0]);
}

// remove project form project board
function removeProject(projectID){
    const projectComponent = document.getElementById(projectID);
    if (projectComponent != null){
        projectComponent.remove();
    }
}

// loads projects from local storage
function loadProjects(){
    const projectsList = document.querySelector("#projects");
    const projectNames = getProjects();

    projectNames.forEach((projectID) => {
        const loadedProject = ProjectComponent(projectID);
        projectsList.appendChild(loadedProject);
    });
}

// iterates through localStorage to find tasks with projectID and loads tasks from local storage to project page
function reloadTasks(projectID) {
    const tasksList = document.querySelector("#tasks");
    const children = tasksList.getElementsByClassName("task")

    Array.from(children).forEach((child) => {
        if (child.classList.contains("task")) {
            tasksList.removeChild(child);
        }
    });

    let taskNames = getTasks(projectID);

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
function removeTask(taskID) {
    const taskComponent = document.getElementById(taskID);
    if (taskComponent != null){
        taskComponent.remove();
    }
}

function updateTask(projectID, taskID) {}

export { addProject, removeProject, loadProjects, addTask, removeTask, reloadTasks, updateTask };
