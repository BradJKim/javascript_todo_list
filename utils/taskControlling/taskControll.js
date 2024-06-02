import TaskComponent from "../../src/components/task/taskComponent";

function loadTasks() {
    /* const taskString = JSON.stringify(task);

    localStorage.setItem(
        `project#${parentProjectID}:task#${task.getId}`,
        taskString
    ); */
};

function addTask(){
    const tasksList = document.querySelector("#tasks");

    const newTask = TaskComponent()
    tasksList.appendChild(newTask);

    /* const loadedTaskString = localStorage.getItem(
        `project#${parentProjectID}:task#${task.getId}`
    );

    const loadedTask = JSON.parse(loadedTaskString)
    console.log(loadedTask) */
}

function deleteTask(taskID){
    const deletingTask = document.getElementById(taskID);
    deletingTask.remove();
}

export { addTask, deleteTask, loadTasks}