const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const list = document.querySelector('#task-list');

let tasks = [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const saved = localStorage.getItem('tasks');
    if (saved) {
        tasks = JSON.parse(saved);
    }
    renderTasks();
}

function renderTasks() {
    list.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task';

        if (task.completed) {
            li.classList.add('completed');
        }
        li.innerHTML = `<input type="checkbox" ${task.completed ? "checked" : ''}>
            <span>${task.text}</span>
            <button>🗑️</button>
        `;
        const checkbox = li.querySelector('input');
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        const deleteButton = li.querySelector('button');
        deleteButton.addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            renderTasks();
        });

        list.appendChild(li);
    });
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) {
        return;
    }

    tasks.push({id: Date.now(), text: text, completed: false});
    saveTasks();
    input.value = '';
    renderTasks();
});

loadTasks();


// service worker registrieren

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(() => {
                console.log('service worker wurde registriert');
            })
            .catch(error => {
                console.log('service worker Error: ', error);
            });
    });
};