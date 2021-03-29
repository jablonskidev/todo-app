//Create an event listener for users adding tasks
document.addEventListener('keydown', addTask);

//Create a function to take and use the user's input
function addTask(pressKey) {
  //Ensure that Enter was pressed
  if(pressKey.keyCode === 13) {
    //Get the text that is inside the text input box
    let newTask = document.getElementById('input-task').value;
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