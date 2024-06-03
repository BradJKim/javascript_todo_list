// removes task from local storage
// returns 0 if successful, returns 1 if unsuccessful
function unstoreTask(parentProjectID, taskID) {
    try {
        
        if (ifTaskExists(parentProjectID, taskID) == false) {
            throw new Error("Task does not exist in localStorage");
        }

        localStorage.removeItem(
            `${parentProjectID}${taskID}`
        );

        return 0;
    } catch (error) {
        console.log(error);
        return 1;
    }
}

// adds task to localStorage
// returns 0 if successful, returns 1 if unsuccessful
function storeTask(parentProjectID, taskID, taskObject) {
    try {
        const stringedTaskObject = JSON.stringify(taskObject);

        localStorage[`${parentProjectID}${taskID}`] = stringedTaskObject;

        return 0;
    } catch (error) {
        console.log(error);
        return 1;
    }
}

// returns task object from local storage
// returns task if successful, returns false if unsuccessful
function getTask(parentProjectID, taskID) {
    try {

        const loadedTaskString = localStorage.getItem(
            `${parentProjectID}${taskID}`
        );

        if (ifTaskExists(parentProjectID, taskID) == false) {
            throw new Error("Task does not exist in localStorage");
        }

        const returnedTask = JSON.parse(loadedTaskString);

        return returnedTask;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// updates task in localStorage
// returns 0 if successful, returns 1 if unsuccessful
function updateTask(){

}

// checks if task exists in localStorage
// returns true if exists, returns false is does not exist
function ifTaskExists(parentProjectID, taskID) {
    const loadedTaskString = localStorage.getItem(
        `${parentProjectID}${taskID}`
    );

    if (loadedTaskString) {
        return true;
    }

    return false;
}

export { storeTask, unstoreTask, getTask, ifTaskExists };
