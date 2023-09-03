
const taskList = document.getElementById('taskList');
const addButton = document.getElementById('addButton');
const newTaskInput = document.getElementById('newTask');


//Add a task
addButton.addEventListener('click', 
    function () {
        const taskName = newTaskInput.value.trim();
        if( taskName !== "") {
            const newTask = document.createElement("li");

            newTask.classList.add("task");
            newTask.innerHTML = `<input type="checkbox" id="${taskName}">
            <label for= "${taskName}"> ${taskName} </label> `;

            taskList.appendChild(newTask);
            newTaskInput.value = "";
        }
    });

    //create new task items
    const createNewTaskItem = (taskText) => {
        const taskItem = document.createElement('li');
        taskItem.className = "taskListItem";

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', deleteTask);

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(deleteBtn);

        return taskItem;
    }

    //Delete tasks
    const deleteTask = () => {
        const taskItem = event.target.parentNode;
        taskList.removeChild(taskItem);
    }