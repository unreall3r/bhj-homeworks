document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task__input");
    const taskList = document.getElementById("tasks__list");
    const taskForm = document.getElementById("tasks__form");

    function addTask(taskText) {
        const task = document.createElement("div");
        task.className = "task";
        task.innerHTML = `
            <div class="task__title">${taskText}</div>
            <a href="#" class="task__remove">&times;</a>
        `;
        
        task.querySelector(".task__remove").addEventListener("click", (event) => {
            event.preventDefault();
            task.remove();
        });
        
        taskList.appendChild(task);
    }
    
    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (taskInput.value.trim() !== "") {
            addTask(taskInput.value.trim());
            taskInput.value = "";
        }
    });
});
