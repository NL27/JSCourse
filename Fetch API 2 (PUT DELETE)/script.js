const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

const getTodos = () => {
    fetch(apiUrl + '?_limit=5')
        .then((response) => response.json())
        .then((data) => {
            data.forEach((todo) => addTodoToDOM(todo));
        });
};

const addTodoToDOM = (todo) => {
    const div = document.createElement('div');
    div.classList.add('todo');
    div.setAttribute('data-id', todo.id);
    
    const checkmarkBtn = document.createElement('button');
    checkmarkBtn.classList.add('checkmark-btn');
    checkmarkBtn.textContent = '✓';
    checkmarkBtn.setAttribute('aria-label', 'Toggle completed');
    checkmarkBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering toggleCompleted
        markAsCompleted(div);
    });
    div.appendChild(checkmarkBtn);
    
    const titleSpan = document.createElement('span');
    titleSpan.textContent = todo.title;
    div.appendChild(titleSpan);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = '✕';
    deleteBtn.setAttribute('aria-label', 'Delete todo');
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering toggleCompleted
        deleteTodo(todo.id, div);
    });
    div.appendChild(deleteBtn);
    
    if (todo.completed === true) {
        div.classList.add('done');
    }
    
    document.getElementById('todo-list').appendChild(div);
}

const createTodo = (e) => {
    e.preventDefault();

    const input = e.target.querySelector('input');
    const newTodo = {
        title: input.value,
        completed: false
    }

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => {
            addTodoToDOM(data);
            input.value = ''; // Clear the input field
        })
};


const toggleCompleted = (e) => {
    // Find the todo div (either clicked directly or parent of clicked element)
    const todoDiv = e.target.classList.contains('todo') 
        ? e.target 
        : e.target.closest('.todo');
    
    // Don't toggle if clicking the delete button or checkmark button (they have their own handlers)
    if (todoDiv && !e.target.classList.contains('delete-btn') && !e.target.classList.contains('checkmark-btn')) {
        // Toggle the completed (green) state
        toggleCompletedState(todoDiv);
    }
};

const markAsCompleted = (element) => {
    toggleCompletedState(element);
};

const toggleCompletedState = (element) => {
    const isCompleted = element.classList.contains('completed');
    
    if (isCompleted) {
        // Remove green state, return to normal
        element.classList.remove('completed');
        element.classList.remove('done'); // Also remove gray if present
        updateTodo(element.dataset.id, false);
    } else {
        // Add green state
        element.classList.add('completed');
        element.classList.remove('done'); // Remove gray state if present
        updateTodo(element.dataset.id, true);
    }
};

const updateTodo = (id, completed) => {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ completed }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
};

const deleteTodo = (id, element) => {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
    .then(() => element.remove());
};

const init = () => {
    getTodos();
    document.querySelector('#todo-form').addEventListener('submit', createTodo);
    document.querySelector('#todo-list').addEventListener('click', toggleCompleted);
};

init();