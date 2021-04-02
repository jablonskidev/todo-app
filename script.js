//Clear input on page refresh (needed for Firefox)
document.getElementById('input-task').value = '';

//Create an event listener for users adding tasks
document.getElementById('add-button').addEventListener('click', addTask);

//Create a function to take and use the user's input
function addTask() {
  let newTask = document.getElementById('input-task').value;
  //Make sure the user isn't inputting an empty string
  if (newTask) {
    //Add that text to the list of tasks
    let taskList = document.getElementById('task-list');
    let newListItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let task = document.createElement('span');
    task.innerText = newTask;
    checkbox.type = 'checkbox';
    newListItem.appendChild(checkbox);
    newListItem.appendChild(task);
    taskList.appendChild(newListItem);
    //Add an event listener for users removing tasks with checkbox
    checkbox.addEventListener('click', function(){     
      //Create a function to remove a single task and checkbox
      taskList.removeChild(newListItem);
    })
  }    
}
