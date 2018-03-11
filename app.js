function onReady() {
  let newID = 0;

  let toDos = [];

  function createNewToDo() {
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: ++newID
    });

    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {

      const newLi = document.createElement('li');

      const newToDo = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const title = document.createElement('span');
      title.textContent = toDo.title;
      newLi.appendChild(title);

      const deleteToDoBtn = document.createElement('button');
      deleteToDoBtn.innerHTML = "<span>DELETE</span>";
      deleteToDoBtn.addEventListener("click",function() {
         toDos = deleteToDo(toDo.id);
         renderTheUI();
       });

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteToDoBtn);
    });

    function deleteToDo(toDoId) {
       return toDos.filter(toDo => toDo.id !== toDoId);
     }
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
    renderTheUI();

  });

  renderTheUI();
}

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');


window.onload = function() {
  onReady();
};
