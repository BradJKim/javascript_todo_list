export default class Project {
    // Private Variables
    #id;

    constructor(id) {
        this.#id = id; 
        this.title = "Project";
        this.description = "";
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

}