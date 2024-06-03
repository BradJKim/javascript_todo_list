import Project from "../../models/project.js"
import "./style.css"

export default function ProjectComponent(projectID){
    const elementProjectID = projectID;
    const project = new Project();
    const element = document.createElement('div');
    element.className = "project";
    element.id = projectID;

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