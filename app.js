function onReady() {
  let newID = 0;

  let toDos = [];

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

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

       const checkbox = document.createElement('input');
       checkbox.type = "checkbox";

       const title = document.createElement('span');
       title.textContent = toDo.title;
       newLi.appendChild(title);

       const deleteToDoBtn = document.createElement('button');
       deleteToDoBtn.innerHTML = "<span>DELETE</span>";
       deleteToDo(toDo.id);

       toDoList.appendChild(newLi);
       newLi.appendChild(checkbox);
       newLi.appendChild(deleteToDoBtn);
     });

     function searchIds(newID) {
       if (newID === toDo.id) {
         return false;
       } else {
         return true;
       }
     }

     function deleteToDo() {

       toDos = toDos.filter(searchIds);
     }

     }

  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();


window.onload = function(){
  onReady();
};
