export function addTask(event) {
    event.preventDefault();
    let title = event.target.elements.taskName.value.trim();
    let description = event.target.elements.taskDescription.value.trim();

    if(!title || !description) {
        alert("Please fill in all fields");
        return;
    }

    let task = {title, description};

    console.log(task);
    event.target.reset();
}