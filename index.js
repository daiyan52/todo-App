let todos = [];

function addTodo() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title === '' || content === '') {
        alert('Please enter both title and content.');
        return;
    }

    const todo = {
        title: title,
        content: content,
    };

    todos.push(todo);
    displayTodos();
    clearInputFields();
}

function displayTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `<strong>${todo.title}</strong>: <br> ${todo.content} <button class="btn btn-danger btn-sm float-right" onclick="removeTodo(${index})">Delete</button>`;
        todoList.appendChild(listItem);
    });
}

function removeTodo(index) {
    todos.splice(index, 1);
    displayTodos();
}

function clearInputFields() {
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
}
