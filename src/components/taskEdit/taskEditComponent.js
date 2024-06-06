import { updateTask } from "../../../utils/localStorageHandling/localStorageHandler";
import { updateTaskView } from "../../../utils/componentControlling/boardControl";
import Task from "../../models/task";
import "./style.css"

export default function TaskEditComponent(projectID, taskID) {
    const parentProjectID = projectID;
    const elementTaskID = taskID;

    const editForm = document.createElement("div");
    editForm.classList.add("taskEdit");

    const titleEdit = document.createElement("input");
    titleEdit.setAttribute("type", "text"); 
    editForm.appendChild(titleEdit);

    const descriptionEdit = dcoument.createElement("input");
    descriptionEdit.setAttribute("type", "text");
    editForm.appendChild(descriptionEdit);

    const dueDateEdit = dcoument.createElement("input");
    dueDateEdit.setAttribute("type", "text");
    editForm.appendChild(dueDateEdit);

    const priorityEdit = dcoument.createElement("input");
    priorityEdit.setAttribute("type", "number");
    editForm.appendChild(priorityEdit);

    const saveButton = document.createElement("button");
    saveButton.innerHTML = "Save";
    saveButton.addEventListener("click", () => {
        const updatedTask = new Task();
        updatedTask.setTitle(titleEdit.value);
        updatedTask.setDescription(descriptionEdit.value);
        updatedTask.setDueDate(dueDateEdit.value);
        updatedTask.setPriority(priorityEdit.value);
        updateTask(parentProjectID, elementTaskID, updatedTask);

        updateTaskView(parentProjectID, elementTaskID);

        editForm.remove();
    });

    return editForm;
}