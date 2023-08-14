const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <span class="delete-btn">Delete</span>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";

        const deleteBtn = taskItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });
    }
}