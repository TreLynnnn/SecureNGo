
const taskList = document.getElementById('taskList');
const addButton = document.getElementById('addButton');
const newTaskInput = document.getElementById('newTask');

addButton.addEventListener('click', 
    function () {
        const taskName = newTaskInput.ariaValueMax.trim();
        if( taskName !== "") {
            const newTask = document.createElement("li");

            newTask.classList.add("task");
            newTask.innerHTML = `<input type="checkbox" id="${taskName}">
            <label for= ${taskName}"> ${taskName} </label> `;

            taskList.appendChild(newTask);
            newTaskInput.value = "";
        }
    });
