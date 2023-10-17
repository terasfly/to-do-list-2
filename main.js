const taskButton = document.getElementById('task-button');
const newTaskList = document.querySelector('.add__tasks-list');
const alertBox = document.getElementById('alert-box');

taskButton.addEventListener('click', () => {
    const yourInput = document.getElementById('your-input');
    const inputValue = yourInput.value;

    if (inputValue.trim() === '') {
        alertBox.style.display = 'block';
    } else {
        alertBox.style.display = 'none';

        const toUpper = inputValue.toUpperCase();
        addTask(toUpper); // Call the function to add the task
        saveTaskToLocalStorage(toUpper); // Save the task to local storage
        yourInput.value = ''; // Clear the input field
    }
});

function createIconBox(taskContainer) {
    const newIcon = document.createElement('div');
    newIcon.classList.add('add__tasks--icon');
    newIcon.innerHTML = '<i class="fas fa-trash"></i>';
    newIcon.style.cursor = 'pointer';

    newIcon.addEventListener('click', () => {
        taskContainer.remove();
        removeTaskFromLocalStorage(taskContainer.querySelector('.add__tasks-text').textContent);
    });
    return newIcon;
}

// Function to save a task to local storage
function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to remove a task from local storage
function removeTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter((t) => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a task to the list
function addTask(task) {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.style.display = 'flex';

    const newTasks = document.createElement('div');
    newTasks.classList.add('add__tasks-text');
    newTasks.textContent = task;

    const newIcon = createIconBox(taskContainer);

    taskContainer.appendChild(newTasks);
    taskContainer.appendChild(newIcon);

    newTaskList.appendChild(taskContainer);
}

// Load saved tasks from local storage when the page loads
window.addEventListener('load', loadTasksFromLocalStorage);

// Function to load saved tasks from local storage
function loadTasksFromLocalStorage() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
        savedTasks.forEach((task) => {
            addTask(task);
        });
    }
}
