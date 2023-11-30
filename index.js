var tasks = [];

function addItem() {
  // Get input values
  var taskTitle = document.getElementById("taskTitle").value;
  var taskContent = document.getElementById("taskContent").value;

  // Check if the input is not empty
  if (taskTitle.trim() !== "" && taskContent.trim() !== "") {
    // Create a new task object
    var newTask = {
      title: taskTitle,
      content: taskContent,
      createdDate: new Date().toLocaleString(),
      completed: false
    };

    // Add the new task to the tasks array
    tasks.push(newTask);

    // Render the tasks
    renderTasks();

    // Clear the input fields
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskContent").value = "";
  }
}

function renderTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach(function(task, index) {
    var li = document.createElement("li");
    li.className = "list-group-item";

    // Task title
    var title = document.createElement("h5");
    title.className = "mb-1";
    title.appendChild(document.createTextNode(task.title));
    li.appendChild(title);

    // Task content
    var content = document.createElement("p");
    content.className = "mb-1";
    content.appendChild(document.createTextNode(task.content));
    li.appendChild(content);

    // Created date
    var date = document.createElement("small");
    date.className = "text-muted";
    date.appendChild(document.createTextNode("Created on " + task.createdDate));
    li.appendChild(date);

    // Edit button
    var editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning btn-sm ml-2";
    editBtn.innerHTML = '<i class="bi bi-pencil"></i> Edit';
    editBtn.onclick = function() {
      editTask(index);
    };
    li.appendChild(editBtn);

    // Delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm ml-2";
    deleteBtn.innerHTML = '<i class="bi bi-trash"></i> Delete';
    deleteBtn.onclick = function() {
      deleteTask(index);
    };
    li.appendChild(deleteBtn);

    // Complete button
    var completeBtn = document.createElement("button");
    completeBtn.className = "btn btn-success btn-sm ml-3";
    completeBtn.innerHTML = task.completed ? '<i class="bi bi-check-square"></i> Mark Incomplete' : '<i class="bi bi-square"></i> Mark Complete';
    completeBtn.onclick = function() {
      toggleComplete(index);
    };
    li.appendChild(completeBtn);

    // Apply completed style
    if (task.completed) {
      li.classList.add("completed");
    }

    // Add the task item to the list
    taskList.appendChild(li);
  });
}

function editTask(index) {
  var editedTitle = prompt("Edit Task Title:", tasks[index].title);
  var editedContent = prompt("Edit Task Content:", tasks[index].content);

  // Update task if values are not empty
  if (editedTitle !== null && editedContent !== null) {
    tasks[index].title = editedTitle;
    tasks[index].content = editedContent;
    renderTasks();
  }
}

function deleteTask(index) {
  var confirmDelete = confirm("Are you sure you want to delete this task?");
  if (confirmDelete) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Initial rendering
renderTasks();