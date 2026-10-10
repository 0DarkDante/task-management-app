import { nanoid } from 'nanoid';
import { renderTasks } from './render-tasks.js';
import { getState, saveState, LS_KEYS } from './local-storage-api.js';

let tasks = [];

export function initTasks() {
    tasks = getState(LS_KEYS.tasks) || [];
    renderTasks(tasks);
}

export function addTask(event) {
    event.preventDefault();
    let title = event.target.elements.taskName.value.trim();
    let description = event.target.elements.taskDescription.value.trim();

    if(!title || !description) {
        alert("Please fill in all fields");
        return;
    }

    let task = {id: nanoid(), title, description};

    tasks.push(task);
    renderTasks(tasks);
    saveState(LS_KEYS.tasks, tasks);
    event.target.reset();
}

export function deleteTask(event) {
    if(event.target.nodeName !== 'BUTTON') {
        return;
    }
    let id = event.target.closest('li').id;

    tasks = tasks.filter(task => task.id !== id);
    renderTasks(tasks);
    saveState(LS_KEYS.tasks, tasks);
}
