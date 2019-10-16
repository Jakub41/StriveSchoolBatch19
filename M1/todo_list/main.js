/**
 * TODO add a task
 * TODO delete a task
 * TODO clear a task
 * TODO filter a task
 * TODO show the tasks added
 * TODO show the tasks completed
 * todo alert confirm message
 *
 **/

/**
 * Defining vars
 */

var addTask = document.querySelector("#section-add-task");
var taskInput = document.querySelector("#task");
var deleteTasks = document.querySelector(".clear-tasks");
var taskList = document.querySelector(".task-list");
var filter = document.querySelector("#filter");
var completed = document.querySelector(".completed-tasks");

// Function to load all the events
function loadAllEvents() {
    // TODO load all single events
}

// Add Task Function
function addTask(e) {
    e.preventDefault();
    // If no value show message
    if (taskInput.value.trim() === "") {
        alert("Are you lazy! Add a task!");
    } else {
        // Create the list li
        var item = document.createElement("li");
        // Add class to li
        item.className = "collection-item";
        // Add the value to li
        item.appendChild(document.createTextNode(taskInput.value));
        // Create the link
        var link = document.createElement("a");
        // Add class to link
        link.className = "delete-item secondary-content";
        // Append link to li
        item.appendChild(link);
        // Append ul to li
        taskList.appendChild(item);
        // Append li to ul
        taskList.appendChild(item);
        // Append li to local storage
        saveTasks(taskInput.value);
        // Empty the impute field
        taskInput.value = "";
    }
}

// Save the tasks to local storage
function saveTasks(task) {
    var tasks;
    // Empty task value from local storage then empty [] of tasks
    // Otherwise get the tasks from local storage
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    // pushing the task into []
    tasks.push(task);
    // setting into local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Save completed tasks to local storage
function saveCompletedTasks(task) {
    var completedTasks;
    // If competed tasks empty then empty []
    // Otherwise get completed tasks string
    if (localStorage.getItem('completedTasks') === null) {
        completedTasks = [];
    } else {
        completedTasks = JSON.parse(localStorage.getItem('completedTasks'));
    }
    // Push completed task to []
    completedTasks.push(task);
    // Set into local storage
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
}

// Get tasks from local storage
function getTasks() {
    var tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task) {
        // Create li
        var item = document.createElement('li');
        // Class to li
        item.className = "collection-item";
        // value to li
        item.appendChild(document.createTextNode(task));
        // Create link
        var link = document.createElement('a');
        // Class to link
        link.className = "delete-item secondary-content";
        // Append link to li
        item.appendChild(link);
        // Append li to ul
        taskList.appendChild(item);
    });
}

// Get completed tasks from local storage
function getCompletedTasks() {
    var completedTasks;
    if (localStorage.getItem('completedTasks') === null) {
        completedTasks = [];
    } else {
        completedTasks = JSON.parse(localStorage.getItem('completedTasks'));
    }
    completedTasks.forEach(function (task) {
        // Create li
        const item = document.createElement('li');
        // Class to li
        item.className = "collection-item";
        // Value to li
        item.appendChild(document.createTextNode(task));
        // Link
        const link = document.createElement('a');
        // Class to link
        link.className = "delete-item secondary-content";
        // Append to link
        item.appendChild(link);
        // Append li to ul
        completed.appendChild(item);
    });
}
