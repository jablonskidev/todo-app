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
    newListItem.innerText = newTask;
    taskList.appendChild(newListItem);
    //Add an event listener for users removing tasks
    newListItem.addEventListener('click', function(){     
      //Create a function to remove a single task
      taskList.removeChild(this);
    })
  }    
}
