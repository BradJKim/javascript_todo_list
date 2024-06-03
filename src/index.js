import { v4 } from "uuid";
import {
    addProject,
    loadProjects,
    addTask,
    reloadTasks,
} from "../utils/componentControlling/boardControl";
import { getProjects } from "../utils/localStorageHandling/localStorageHandler";

const projectBoard = document.querySelector("#projects");
const taskList = document.querySelector("#tasks");

let currentProjectID = "";

// helper function for adding clickable wrapper div for current project id
function applyProjectWrapper(projectID) {
    const wrapper = document.createElement("div");
    const projectElement = document.getElementById(projectID);
    wrapper.addEventListener("click", () => {
        if (currentProjectID != "") {
            const currentProjectElement =
                document.getElementById(currentProjectID);
            currentProjectElement.classList.toggle("selected");
        }

        currentProjectID = projectElement.id;

        projectElement.classList.toggle("selected");

        reloadTasks(currentProjectID);
    });

    wrapper.appendChild(projectElement);
    projectBoard.appendChild(wrapper);
}

// Button for adding projects with project id wrapper
const projectAdderButton = document.createElement("button");
projectAdderButton.innerHTML = "Add New Project";
projectAdderButton.addEventListener("click", () => {
    const id = v4();
    addProject(`project#${id}`);
    applyProjectWrapper(`project#${id}`);
});
projectBoard.appendChild(projectAdderButton);

// Button for adding task
const taskAdderButton = document.createElement("button");
taskAdderButton.innerHTML = "Add New Task";
taskAdderButton.addEventListener("click", () => {
    if (currentProjectID == "") {
        alert(
            "Project not selected, please select a project before adding tasks"
        );
    } else {
        const id = v4();
        addTask(currentProjectID, `task#${id}`);
    }
});
taskList.appendChild(taskAdderButton);

// loads projects to index
loadProjects();

// Apply wrapper to each project
const projects = getProjects();
projects.forEach((projectID) => {
    applyProjectWrapper(projectID);
});
