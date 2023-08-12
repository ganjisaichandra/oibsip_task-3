let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const task = {
      text: taskText,
      completed: false,
      addedDate: new Date(),
      completedDate: null,
    };

    tasks.push(task);
    taskInput.value = "";
    renderTasks();
  }
}

function completeTask(index) {
  tasks[index].completed = true;
  tasks[index].completedDate = new Date();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const pendingList = document.getElementById("pendingList");
  const completedList = document.getElementById("completedList");
  pendingList.innerHTML = "";
  completedList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = task.text;

    if (task.completed) {
      listItem.style.textDecoration = "line-through";
      completedList.appendChild(listItem);
    } else {
      const completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.onclick = () => completeTask(index);
      listItem.appendChild(completeButton);
      pendingList.appendChild(listItem);
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTask(index);
    listItem.appendChild(deleteButton);
  });
}

// Initial rendering
renderTasks();
