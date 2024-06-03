export default class Task {
    // Private Variables
    #id;

    constructor(id) {
        this.#id = id; 
        this.title = "New Task";
        this.description = "";
        this.dueDate = ""; // date-fns
        this.priority = 1; // int 1-5
        this.checked = false;
    }

    // Get Accessor for description property
    get getId() {
        return this.#id;
    }

    // Accessors for title property
    get getTitle() {
        return this.title;
    }
    set setTitle(title) {
        this.title = title;
    }

    // Accessors for description property
    get getDescription() {
        return this.description;
    }
    set setDescription(description) {
        this.description = description;
    }

    // Accessors for dueDate property
    get getDueDate() {
        return this.dueDate;
    }
    set setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    // Accessors for priority property
    get getPriority() {
        return this.priority;
    }
    set setPriority(priority) {
        this.priority = priority;
    }

    // Accessors for checked property
    get getChecked() {
        return this.checked;
    }
    set setChecked(checked) {
        this.checked = checked;
    }

}