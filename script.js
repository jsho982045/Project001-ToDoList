document.getElementById("add-button").addEventListener("click", addTask); // We use getElementById to search for any instances of add-button in the html. We then use an eventListener to track when the button is clicked which will call the addTask function
// Function to add new tasks
function addTask() {    
    // Get input
    var taskInput = document.getElementById("input-box").value;
    // Create new item in list
    var newTask = document.createElement('li'); 
    // Use existing styling for added tasks to ensure consistency in design
    newTask.classList.add("list-item", "flist");

    // Creating checkbox
    var checkbox = document.createElement("input");
    checkbox.type = 'checkbox';

    // Creating a new dynamic HTML label element
    var label = document.createElement('label');
    // Adds the task class to ensure styles are the same for new tasks added as the default tasks
    label.classList.add('task');
    // Getting the input
    label.textContent = taskInput;

    // Adding the delete button to the new task
    var newDeleteButton = document.createElement('button');
    newDeleteButton.classList.add('delete-button');
    newDeleteButton.textContent = 'X';

    // Adding the checkbox and styling to the new task
    newTask.appendChild(checkbox);
    newTask.appendChild(label);
    newTask.appendChild(newDeleteButton);
    
    // Add new tasks to the list
    var taskList = document.querySelector(".list-items");
    taskList.appendChild(newTask); // We add the new task to the list by using getElementById to first find the list and then appendChild to add the new task to the list

    // Add the white bar after the task for consistency in design
    var whiteBar = document.createElement('div');
    whiteBar.classList.add('white-bar');
    taskList.appendChild(whiteBar);

    // Clear input box once add button is clicked
    document.getElementById("input-box").value = "";
}

document.querySelector('.list-items').addEventListener("click", deleteTask);
// Function to delete tasks
function deleteTask(event) {
    // Gets the element where the event occurs (delete button)
    if (event.target.classList.contains('delete-button')) {
        // We access the parent element to delete the entire task and styling
        var taskItem = event.target.parentElement;
        taskItem.remove();
    }
    // Remove the white bar 
    var whiteBar = taskItem.nextElementSibling;
    if (whiteBar && whiteBar.classList.contains("white-bar")) {
        whiteBar.remove();
    }
}

