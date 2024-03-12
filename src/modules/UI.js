import Project from './Project.js';
import Todos from './todos.js';

export default class UI {
    static contentContainer = document.getElementById('content');
    static projects = [];

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

        this.projects.push(project1);

        return project1;
    }

    // Load content
    static loadHomePage() {
        var testProject = UI.sampleDataTasks();
        UI.loadProject(testProject);
        UI.loadNavbar();
        
    };

    // Load navbar
    static loadNavbar() {
        const navbarContainer = document.getElementById('projects__container');
        navbarContainer.innerHTML = '';

        // Loop through projects and create clickable divs
        this.projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.textContent = project.getName();
            projectDiv.classList.add('project-link');
            projectDiv.addEventListener('click', () => {
                // Load project when clicked
                UI.loadProject(project);
            });
            navbarContainer.appendChild(projectDiv);
        });
    };

    // Project UI
    static loadProject(project) {
        const projectTasksContainer = document.getElementById('task__list');
        projectTasksContainer.innerHTML = '';
    
        const projectName = document.createElement('p');
        projectName.textContent = project.getName();
        projectTasksContainer.appendChild(projectName); // Append projectName to projectTasksContainer
    
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
