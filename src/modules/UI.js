import Todos from './Todos.js';
import Project from './Project.js';

export default class UI {
    static contentContainer = document.getElementById('content');

    static sampleDataTasks() {
        // Create some Todos
        const todo1 = new Todos('Task 1', '11/03/2024', 'This is task 1');
        const todo2 = new Todos('Task 2', '15/03/2024', 'This is task 2');

        // Create a Project and add Todos to it
        const project1 = new Project('To-Do');
        project1.addTask(todo1);
        project1.addTask(todo2);

        // Example usage of Project methods
        console.log(project1.getName()); // Output: Project 1
        console.log(project1.getTasks()); // Output: [todo1, todo2]

        return project1;
    }

    // Load content
    static loadHomePage() {
        var testProject = UI.sampleDataTasks();
        UI.loadProject(testProject);
        
    };

    // Project UI
    static openProject() {

    };

    static loadProject(project) {
        const projectName = document.createElement('p');
        projectName.textContent = project.getName();
        this.contentContainer.appendChild(projectName);

        const projectTasksContainer = document.createElement('div');
        projectTasksContainer.classList.add('task__list');
        this.contentContainer.appendChild(projectTasksContainer);
        const projectTasks = project.getTasks();
        projectTasks.forEach(task => {
            var taskItem = UI.loadTask(task);
            taskItem.classList.add('task__item');
            projectTasksContainer.appendChild(taskItem);
        });

    }

    // Tasks UI
    static loadTask(task) {
        const taskButton = document.createElement('div');
        const taskName = document.createElement('p');
        taskName.classList.add('task__name');
        taskName.textContent = task.getName();
        taskButton.appendChild(taskName);

        const taskDueDate = document.createElement('div');
        taskDueDate.classList.add('task__due__date')
        taskDueDate.textContent = task.getDueDate();
        taskButton.appendChild(taskDueDate);

        const taskDescription = document.createElement('p');
        taskDescription.classList.add('task__description');
        taskDescription.textContent = task.getDescription();
        taskButton.appendChild(taskDescription);

        return taskButton;
    }
}
