import TaskComponent from "../../src/components/task/taskComponent";

// loads tasks from local storage to project page
function loadTasks(projectID) {
    /* const taskString = JSON.stringify(task);

    localStorage.getItem(
        `project#${parentProjectID}:task#${task.getId}`,
        taskString
    ); */
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

function updateTask(projectID, taskID){

}

export { addTask, deleteTask, loadTasks, updateTask };
