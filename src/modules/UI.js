import Todos from './Todos.js';
import Project from './Project.js';

export default class UI {

    static sampleDataTasks() {
        // Create some Todos
        const todo1 = new Todos('Task 1', '2024/03/15', 'This is task 1', 'High');
        const todo2 = new Todos('Task 2', '2024/03/17', 'This is task 2', 'Medium');

        // Create a Project and add Todos to it
        const project1 = new Project('Project 1');
        project1.addTask(todo1);
        project1.addTask(todo2);

        // Example usage of Project methods
        console.log(project1.getName()); // Output: Project 1
        console.log(project1.getTasks()); // Output: [todo1, todo2]

        // Delete a task from the project
        project1.deleteTasks('Task 1');
        console.log(project1.getTasks()); // Output: [todo2]
    }

    // Load content
    static loadHomePage() {
        UI.testLoadProjects();
    };

    // Remove test function
    static testLoadProjects() {
        UI.sampleDataTasks();
        
        
    }
}
