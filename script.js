var selectedDate = ""; // Define selectedDate globally

$(function() {
    // Initialize the datepicker on the hidden input field
    $("#datepicker").datepicker({
        onSelect: function(dateText) {
            selectedDate = dateText; // Capture the selected date
        }
    });

    // Show the datepicker when the calendar button is clicked
    $("#date-button").click(function() {
        $("#datepicker").datepicker("show");
    });
});

document.getElementById("add-button").addEventListener("click", function() {
    addTask(selectedDate); // Pass selectedDate to addTask
});

// Function to add new tasks
function addTask(selectedDate) {    
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
    // Setting the text content of the label
    label.textContent = taskInput;

    // Creating due date element
    var dateLabel = document.createElement('span');
    dateLabel.classList.add('due-date');
    dateLabel.textContent = "due: " + selectedDate;

    // Adding the delete button to the new task
    var newDeleteButton = document.createElement('button');
    newDeleteButton.classList.add('delete-button');
    newDeleteButton.textContent = 'X';

    // Adding the checkbox, label, due date, and delete button to the new task
    newTask.appendChild(checkbox);
    newTask.appendChild(label);
    newTask.appendChild(dateLabel); // Append due date
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
        
        // Remove the white bar 
        var whiteBar = taskItem.nextElementSibling;
        if (whiteBar && whiteBar.classList.contains("white-bar")) {
            whiteBar.remove();
        }
    }
}

function showColorLegend() {
    var showColorLegend = document.getElementById("color-bar-container");
    if(showColorLegend.style.display === "none") {
        showColorLegend.style.display = "block";
    } else {
        showColorLegend.style.display = "none";
    }
}