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
        UI.addEventListeners();
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
    static addProjectModal = document.getElementById('add__project');
    static addProjectButton = document.getElementById('add__project__button');

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
    };

    static openAddProjectModal() {
        this.addProjectModal.style.display = 'flex';
    }

    // Tasks UI
    static addTaskModal = document.getElementById('add__task');
    static addTaskButton = document.getElementById('add__task__button');

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
    };

    static openAddTaskModal() {
        this.addTaskModal.style.display = 'flex';
    }

    // Add Button Event Listeners
    static addEventListeners() {

        this.addProjectButton.addEventListener('click', () => {
            this.openAddProjectModal();
        });

        this.addTaskButton.addEventListener('click', () => {
            this.openAddTaskModal();
        })

        // If user clicks outside of modal, close the modal
        window.addEventListener('click', (event) => {
            const addTaskModal = document.getElementById('add__task');
            const addProjectModal = document.getElementById('add__project');
            const addProjectButton = document.getElementById('add__project__button');
        
            if (event.target !== addTaskModal && event.target !== addProjectModal && event.target !== addProjectButton) {
                addTaskModal.style.display = 'none';
                addProjectModal.style.display = 'none';
            }
        });
        
        // Prevent click propagation when clicking the add__project__button
        this.addProjectButton.addEventListener('click', (event) => {
            event.stopPropagation();
        });
        
        this.addTaskButton.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    };
}
