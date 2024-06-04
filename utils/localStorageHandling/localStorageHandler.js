// returns array of all projects in local storage
function getProjects() {
    const projectNames = [];

    Object.keys(localStorage)
        .filter((projectName) => !projectName.includes("task"))
        .forEach((projectName) => {
            projectNames.push(projectName);
        });

    return projectNames;
}

// returns project from local storage
function getProject(projectID) {
    try {
        if (ifProjectExists(projectID) == false) {
            throw new Error("Task does not exist in localStorage");
        }

        const loadedProjectString = localStorage.getItem(projectID);

        const returnedProject = JSON.parse(loadedProjectString);

        return returnedProject;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// adds project to local storage
function storeProject(projectID, projectObject) {
    try {
        const stringedProjectObject = JSON.stringify(projectObject);

        localStorage[`${projectID}`] = stringedProjectObject;

        return 0;
    } catch (error) {
        console.log(error);
        return 1;
    }
}

// gets all tasks from local storage with projectID
function getTasks(projectID) {
    const taskNames = [];

    Object.keys(localStorage)
        .filter((taskName) => taskName.startsWith(projectID))
        .forEach((taskName) => {
            const indexOfTask = taskName.lastIndexOf("task");
            if (indexOfTask > -1){
                taskNames.push(taskName.substring(indexOfTask));
            }
        });

    return taskNames;
}

// removes project from local storage
function unstoreProject(projectID) {
    try {
        if (ifProjectExists(projectID) == false) {
            throw new Error("Project does not exist in localStorage");
        }

        localStorage.removeItem(projectID);

        return 0;
    } catch (error) {
        console.log(error);
        return 1;
    }
}

// returns if project exists
function ifProjectExists(projectID) {
    const loadedProjectString = localStorage.getItem(projectID);

    if (loadedProjectString) {
        return true;
    }

    return false;
}

// updates project in local storage

// removes task from local storage
// returns 0 if successful, returns 1 if unsuccessful
function unstoreTask(parentProjectID, taskID) {
    try {
        if (ifTaskExists(parentProjectID, taskID) == false) {
            throw new Error("Task does not exist in localStorage");
        }

        localStorage.removeItem(`${parentProjectID}${taskID}`);

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
        if (ifTaskExists(parentProjectID, taskID) == false) {
            throw new Error("Task does not exist in localStorage");
        }

        const loadedTaskString = localStorage.getItem(
            `${parentProjectID}${taskID}`
        );

        const returnedTask = JSON.parse(loadedTaskString);

        return returnedTask;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// updates task in localStorage
// returns 0 if successful, returns 1 if unsuccessful
function updateTask() {}

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

export {
    getProjects,
    getProject,
    storeProject,
    unstoreProject,
    storeTask,
    unstoreTask,
    getTask,
    ifTaskExists,
    ifProjectExists,
    getTasks,
};
