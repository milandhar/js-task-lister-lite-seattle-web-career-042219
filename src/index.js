document.addEventListener("DOMContentLoaded", () => {
  // your code here


  document.querySelector("#create-task-form").addEventListener('submit', (event) => {
    event.preventDefault();
    let newTask = event.target[0].value;
    let priority = event.target[1].value;
    console.log(event.target[0].value);
    addTaskToList(newTask, priority);
    event.target[0].value = "";

  })

  function addTaskToList(task, priority) {
    const taskList = document.querySelector('#tasks');
    let newTask = document.createElement("li");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "D"
    deleteBtn.id = "delete-btn"
    newTask.className = "taskItems"
    newTask.textContent = task;
    console.log
    newTask.style.color = priority;
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);
    deleteBtn.addEventListener('click', () => {
      newTask.parentNode.removeChild(newTask)
    })

  }



});
