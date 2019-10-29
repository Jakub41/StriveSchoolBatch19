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

/**
 *
 * Load all the events
 *
 */
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

/**
 *
 * addTask function
 * we are adding here our single task
 *
 */
function addTask(e) {
    e.preventDefault();
    // If no value show message
    // We eliminate white spaces trim() -> https://mzl.la/2NpNSqI
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

/**
 *
 * Save the tasks to local storage
 * When we save we push the task to the obj which is set on local-storage
 * to persist the data.
 *
 * Link: https://mzl.la/2osPUy3
 *
 * @param  task
 *
 **/
function saveTasks(task) {
    var tasks;
    // Empty task value from local storage then empty [] of tasks
    // Otherwise get the tasks from local storage
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        // We need to parse as we get an OBJ to be able to use it
        // -> https://mzl.la/2pb04nn
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    // pushing the task into []
    tasks.push(task);
    // setting into local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 *
 * Save completed tasks to local storage
 *
 * @param  task
 */
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

/**
 *
 * Get tasks from local storage
 * we get our tasks from local-storage and show it
 *
 */
function getTasks() {
    var tasks;
    // If [] empty I do not get any
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        // If ![] I parse the data OBJ from local-storage
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

/**
 *
 *  Get completed tasks from local storage
 *
 * */
function getCompletedTasks() {
    var completedTasks;
    if (localStorage.getItem("completedTasks") === null) {
        completedTasks = [];
    } else {
        completedTasks = JSON.parse(localStorage.getItem("completedTasks"));
    }
    // We loop our tasks and add to it elements
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

/**
 *
 * Remove task
 * we remove a single task
 *
 **/
function removeTask(e) {
    // We target the correct li
    var li = e.target.parentElement.parentElement;
    // We target the correct a
    var a = e.target.parentElement;
    // we check if the a contains the added class delete-item
    if (a.classList.contains("delete-item")) {
        // When the event is trig we need to confirm the remove
        if (confirm("Are You Sure ?")) {
            // remove the li
            li.remove();
            // remove the data from local-storage
            removeFromLocalStorage(li);
        }
    }
}

/***
 *
 * Remove task from local storage
 * we are removing our task data from local-storage
 *
 */
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
/**
 *
 * Remove completed task from local storage
 * we are removing the completed task
 *
 */
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

/**
 *
 * Clear all tasks from the DOM
 * we reset out view ans local-storage
 * from all data
 *
 * */
function clearTasks() {
    //Clear task from the dom
    // We loop all and removing
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    // Clear from local storage
    clearAllLocalStorage();
}

/**
 *
 *  Clear completed tasks from DOM and local-storage
 *
*/
function clearCompletedTasks() {
    if (confirm("Destroy all ?")) {
        //Clear from DOM
        while (completed.firstChild) {
            completed.removeChild(completed.firstChild);
        }
        //Clear from local storage
        clearAllLocalStorage();
    }
}

/**
 *
 * Clear all from local storage
 * we wipe out all the persistent data
 *
 */
function clearAllLocalStorage() {
    localStorage.clear();
}

/**
 *
 * Filter tasks
 * we here filter the tasks when we search for it
 *
 * TODO Make the filter validation better to check also the order of the input characters
 * TODO as a check if we write to do or od ot
 *
 *
*/
function filterTasks(e) {
    var value = e.target.value.toLowerCase();
    // Filtering the tasks & showing nothing if not match
    document.querySelectorAll(".collection-item").forEach(function(i) {
        var text = i.firstChild.textContent;
        // We just check starting from first letter
        // to the value matching the letters
        // Ex: we have a task called "TODO"
        // we write "T" as first then we see in the filter all the tasks having "T"
        // but if we wright "Ta" no result
        if (text.toLowerCase().indexOf(value) != -1) {
            i.style.display = "block";
        } else {
            i.style.display = "none";
        }
    });
}

/**
 *
 * Add completed task to completed task list
 * we are adding to the complete task to the complete list
 *
 */
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
        // TODO make it better with an icon and not text
        document.querySelector(".green-check").classList.add("check");
        // We show completed message in 1s
        setTimeout(function() {
            document.querySelector(".green-check").classList.remove("check");
        }, 1000);

        saveCompletedTasks(target.textContent);
    } else if (target.classList.contains("delete-item")) {
        // Remove from DOM
        target.parentElement.remove();
        // Remove from local storage
        removeFromLocalStorage(target.parentElement);
        completed.appendChild(target.parentElement);
        // Check animation
        document.querySelector(".green-check").classList.add("check");
        setTimeout(function() {
            document.querySelector(".green-check").classList.remove("check");
        }, 1000);

        saveComTasks(target.parentElement.textContent);
    }
}

/**
 *
 * Remove item from completed task
 * we just point to remove the elements from the completed list
*/
function editCompletedTasks(e) {
    // We check where we adde class comp == completed
    // We need to point the right list as we have 2
    // 1 is for tasks not completed and 2 completed tasks
    if (e.target.classList.contains("comp")) {
        if (confirm("Are you Sure ?")) {
            e.target.parentElement.parentElement.remove();
            removeCompletedFromLocalStorage(
                e.target.parentElement.parentElement
            );
        }
    }
}
