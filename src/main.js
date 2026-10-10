import { refs } from "./js/refs";
import { addTask, deleteTask, initTasks } from "./js/tasks";
import { toggleTheme, initTheme } from "./js/theme-switcher";

initTasks();
initTheme(); 

refs.form.addEventListener('submit', addTask)
refs.taskList.addEventListener('click', deleteTask)
refs.button.addEventListener('click', toggleTheme)
