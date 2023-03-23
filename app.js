const addButton = document.querySelector('.taskAddingButton');

addButton.addEventListener("click", () => {
  if(document.querySelector('input').value.length == 0){
    alert("Please Enter Task Name");
  }
  else{
    document.querySelector('.contentContainer').innerHTML += `
    <div class="tasks">
      <span class="taskName">
        ${document.querySelector('input').value}
      </span>
      <button class="deleteTask">
        Delete
      </button>
    </div>
    `
  }
});