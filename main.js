const taskButton = document.getElementById('task-button');
const newTaskList = document.querySelector('.add__tasks-list');
const alertBox = document.getElementById('alert-box')

taskButton.addEventListener('click', () => {
    const yourInput = document.getElementById('your-input');
    const inputValue = yourInput.value;

    if (inputValue.trim() === '') {
        // Show the alert box
        alertBox.style.display = 'block'
    } else {
        // Hide the alert box
        alertBox.style.display = 'none'


        const toUpper = inputValue.toUpperCase();
        console.log(toUpper);

        // Create a container for the task (text and icon)
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        taskContainer.style.display = 'flex'; // Set display to flex

        // Create a div for the task text
        const newTasks = document.createElement('div');
        newTasks.classList.add('add__tasks-text');
        newTasks.textContent = toUpper;

        // Use the createIconBox function to get the icon element and pass the taskContainer
        const newIcon = createIconBox(taskContainer);

        // Append the text and icon to the task container
        taskContainer.appendChild(newTasks);
        taskContainer.appendChild(newIcon);

        // Append the task container to the task list
        newTaskList.appendChild(taskContainer);

        // Clear the input field
        yourInput.value = '';
    }
});

function createIconBox(taskContainer) {
    const newIcon = document.createElement('div');
    newIcon.classList.add('add__tasks--icon');
    newIcon.innerHTML = '<i class="fas fa-trash"></i>';
    newIcon.style.cursor = 'pointer';

    newIcon.addEventListener('click', () => {
        taskContainer.remove();
    });
    return newIcon;
}
// Function to update localStorage with the current task list
