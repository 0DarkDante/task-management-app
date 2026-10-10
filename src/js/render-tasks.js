import {refs} from './refs.js';

export function renderTasks(tasks) {
    let tasksMarkup = tasks.map(({id, description, title}) => { 
        return `
        <li class="task-list-item" id="${id}">
            <button class="task-list-item-btn">Delete</button>
            <h3>${title}</h3>
            <p>${description}</p>
        </li>
        `
    }).join(''); 

    refs.taskList.innerHTML = tasksMarkup;
    
}