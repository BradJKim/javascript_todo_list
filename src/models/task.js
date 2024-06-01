export default class Task {
    // Private Variables
    #id;

    constructor() {
        this.#id = 1; // self asign
        this.title = "New Task";
        this.description = "";
        this.dueDate = ""; // date-fns
        this.priority = 1; // int 1-5
        this.checked = false;
    }

    get title() {
        return this.title;
    }
    set title(title) {
        this.title = title;
    }

    // Accessors for description property
    get description() {
        return this.description;
    }
    set description(description) {
        this.description = description;
    }

    // Accessors for dueDate property
    get dueDate() {
        return this.dueDate;
    }
    set dueDate(dueDate) {
        this.dueDate = dueDate;
    }

    // Accessors for priority property
    get priority() {
        return this.priority;
    }
    set priority(priority) {
        this.priority = priority;
    }

    // Accessors for checked property
    get checked() {
        return this.checked;
    }
    set checked(checked) {
        this.checked = checked;
    }

}