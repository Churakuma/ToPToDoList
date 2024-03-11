export default class Project {
    constructor(name, tasks) {
        this.name = name,
        this.tasks = []
    };

    setName(name) {
        this.name = name;
    };

    setTasks(tasks) {
        this.tasks = tasks;
    };

    getName() {
        return this.name;
    };

    getTasks() {
        return this.tasks;
    }

    getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName);
    };

    contains(taskName) {
        return this.tasks.some((task) => task.getName() === taskName);
    }

    addTask(newTask) {
        if(this.tasks.find((task) => task.getName() === newTask.name)) return;
        this.tasks.push(newTask);
    };

    deleteTasks(taskName) {
        this.tasks = this.tasks.filter((task) => task.name !== taskName);
    };
};