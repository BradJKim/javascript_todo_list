import Project from "../../models/project.js"
import { ifProjectExists, getProject, storeProject } from "../../../utils/localStorageHandling/localStorageHandler.js";
import "./style.css"

export default function ProjectComponent(projectID){
    const elementProjectID = projectID;
    let project = new Project();
    const element = document.createElement('div');
    element.className = "project";
    element.id = projectID;

    // assign existing task if task exists, else store task in local storage
    if (ifProjectExists(elementProjectID) == true) {
        project = getProject(elementProjectID);
    } else {
        storeProject(elementProjectID, project);
    }

    // project title
    const projectTitle = document.createElement("h2");
    projectTitle.innerHTML = "New Project";

    element.appendChild(projectTitle);

    // project description
    const projectDescription = document.createElement("p");
    projectDescription.innerHTML = "Description";

    element.appendChild(projectDescription);

    return element;
}