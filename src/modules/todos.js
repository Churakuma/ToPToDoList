export default class Todos {
    constructor(name, dueDate = 'No date', description, priority) {
        this.name = name,
        this.dueDate = dueDate,
        this.description = description,
        this.priority = priority
    };

    setName(name) {
        this.name = name;
    };

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    setDescription(description) {
        this.description = description;
    };

    setPriority(priority) {
        this.priority = priority;
    };

    getName() {
        return this.name;
    };

    getDueDate() {
        return this.dueDate;
    };

    getDescription() {
        return this.description;
    };

    getPriority() {
        return this.priority;
    };

    getDateFormatted() {
        const day = this.dueDate.split('/')[0];
        const month = this.dueDate.split('/')[1];
        const year = this.dueDate.split('/')[2];
        return `${month}/${day}/${year}`;
    };
}