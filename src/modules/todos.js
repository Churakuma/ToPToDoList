export default class Todos {
    constructor(name, dueDate = 'No date', description) {
        this.name = name,
        this.dueDate = dueDate,
        this.description = description
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

    getName() {
        return this.name;
    };

    getDueDate() {
        return this.dueDate;
    };

    getDescription() {
        return this.description;
    };

    getDateFormatted() {
        const day = this.dueDate.split('/')[0];
        const month = this.dueDate.split('/')[1];
        const year = this.dueDate.split('/')[2];
        return `${month}/${day}/${year}`;
    };
}