/**
 * Defining vars
 * Defining globals to let them accessible in the functions
 */

// Selecting where the form is
var sectionTask = document.querySelector("#section-add-task form");
// Selecting where we insert the input
var taskInput = document.querySelector("#task");
// Selecting where we can clear
var deleteTasks = document.querySelector(".clear-tasks");
// Selecting where we have the list of tasks
var taskList = document.querySelector(".task-list");
// Selecting the filter of tasking
var filter = document.querySelector("#filter");
// Selecting completing tasks
var completed = document.querySelector(".completed-tasks");

// Function to load all the events
function loadAllEvents() {
    // Add task
    sectionTask.addEventListener("submit", addTask);
    // Save task
    window.addEventListener("load", getCompletedTasks);
    // Save and load to DOM
    window.addEventListener("load", getTasks);
    // Remove
    taskList.addEventListener("click", removeTask);
    // Clear all
    deleteTasks.addEventListener("click", clearTasks);
    // Clear completed
    deleteTasks.addEventListener("click", clearCompletedTasks);
    // Filter tasks
    filter.addEventListener("keyup", filterTasks);
    // Add to completed list
    taskList.addEventListener("click", addToCompletedTasks);
    // Remove completed
    completed.addEventListener("click", editCompletedTasks);
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
        // Add a mark
        link.innerHTML = '<div class="comp">X</div>';
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
    if (localStorage.getItem("completedTasks") === null) {
        completedTasks = [];
    } else {
        completedTasks = JSON.parse(localStorage.getItem("completedTasks"));
    }
    // Push completed task to []
    completedTasks.push(task);
    // Set into local storage
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}

// Get tasks from local storage
function getTasks() {
    var tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(task) {
        // Create li
        var item = document.createElement("li");
        // Class to li
        item.className = "collection-item";
        // value to li
        item.appendChild(document.createTextNode(task));
        // Create link
        var link = document.createElement("a");
        // Class to link
        link.className = "delete-item secondary-content";
        // Add mark
        link.innerHTML = '<div class="comp">X</div>';
        // Append link to li
        item.appendChild(link);
        // Append li to ul
        taskList.appendChild(item);
    });
}

// Get completed tasks from local storage
function getCompletedTasks() {
    var completedTasks;
    if (localStorage.getItem("completedTasks") === null) {
        completedTasks = [];
    } else {
        completedTasks = JSON.parse(localStorage.getItem("completedTasks"));
    }
    completedTasks.forEach(function(task) {
        // Create li
        var item = document.createElement("li");
        // Class to li
        item.className = "collection-item";
        // Value to li
        item.appendChild(document.createTextNode(task));
        // Link
        var link = document.createElement("a");
        // Class to link
        link.className = "delete-item secondary-content";
        // Add mark
        link.innerHTML = '<div class="comp">X</div>';
        // Append to link
        item.appendChild(link);
        // Append li to ul
        completed.appendChild(item);
    });
}

// Remove task
function removeTask(e) {
    var li = e.target.parentElement.parentElement;
    var a = e.target.parentElement;
    if (a.classList.contains("delete-item")) {
        if (confirm("Are You Sure ?")) {
            li.remove();
            removeFromLocalStorage(li);
        }
    }
}
// Remove task from local storage
function removeFromLocalStorage(taskItem) {
    var tasks;
    // If empty local storage then empty []
    // Otherwise tasks
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    // Looping task index and remove
    tasks.forEach(function(task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    // Set the local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Remove completed task from local storage
function removeCompletedFromLocalStorage(taskItem) {
    var completedTasks;
    // Completed tasks from LS [] then empty []
    // Otherwise completed tasks
    if (localStorage.getItem("completedTasks") === null) {
        completedTasks = [];
    } else {
        completedTasks = JSON.parse(localStorage.getItem("completedTasks"));
    }
    // Looping completed tasks remove
    completedTasks.forEach(function(task, index) {
        if (taskItem.textContent === task) {
            completedTasks.splice(index, 1);
        }
    });
    // Set local storage
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}
// Clear all tasks from the DOM
function clearTasks() {
    //Clear task from the dom
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    // Clear from local storage
    clearAllLocalStorage();
}
// Clear completed tasks from DOM
function clearCompletedTasks() {
    //Clear from DOM
    while (completed.firstChild) {
        completed.removeChild(completed.firstChild);
    }
    //Clear from local storage
    clearAllLocalStorage();
}
// Clear all from local storage
function clearAllLocalStorage() {
    localStorage.clear();
}
// Filter tasks
function filterTasks(e) {
    var value = e.target.value.toLowerCase();
    document.querySelectorAll(".collection-item").forEach(function(i) {
        var text = i.firstChild.textContent;
        if (text.toLowerCase().indexOf(value) != -1) {
            i.style.display = "block";
        } else {
            i.style.display = "none";
        }
    });
}

// Add completed task to completed task list
function addToCompletedTasks(e) {
    var target = e.target;
    if (target.classList.contains("collection-item")) {
        // Remove from dom
        target.remove();
        // Remove from local storage
        removeFromLocalStorage(target);
        // Append li to completed item
        completed.appendChild(target);
        // Check animation
        document.querySelector(".green-check").classList.add("check");
        setTimeout(function() {
            document.querySelector(".green-check").classList.remove("check");
        }, 1000);

        saveCompletedTasks(target.textContent);
    } else if (target.classList.contains("delete-item")) {
        // Remove from DOM
        target.parentElement.remove();
        // Remove from local storage
        removeFromLS(target.parentElement);
        completed.appendChild(target.parentElement);
        // Check animation
        document.querySelector(".green-check").classList.add("check");
        setTimeout(function() {
            document.querySelector(".green-check").classList.remove("check");
        }, 1000);

        saveComTasks(target.parentElement.textContent);
    }
}
// Remove item from completed task
function editCompletedTasks(e) {
    if (e.target.classList.contains("comp")) {
        if (confirm("Are you Sure ?")) {
            e.target.parentElement.parentElement.remove();
            removeComFromLS(e.target.parentElement.parentElement);
        }
    }
}

// Load all
loadAllEvents();
