const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    newTask.addEventListener('click', () => {
      newTask.classList.toggle('completed');
      if (newTask.classList.contains('completed')) {
        completedTasksList.appendChild(newTask);
      } else {
        pendingTasksList.appendChild(newTask);
      }
    });
    newTask.addEventListener('dblclick', () => {
      newTask.remove();
    });
    pendingTasksList.appendChild(newTask);
    taskInput.value = '';
  }
});