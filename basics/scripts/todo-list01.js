const todoList = [];
console.log(todoList);

document.querySelector('.js-add-todo-button').addEventListener(
  'click', () => {addTodo()});
renderTodoList();

function addTodo(){
  let inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  // console.log(name);
  todoList.push(name);
  console.log(todoList);
  inputElement = document.querySelector('.js-date-input');
  const dueDate = inputElement.value;
  todoList.push(dueDate)
  inputElement.value = '';
}

function renderTodoList(){
  let todoListHTML='';
  let index=0;
  const todoObject = todoList[index];

  todoList.foreach(function(todoObject, index)
  {
    // const name =  todoObject.name;
    // const dueDate = todoObject.dueDate
    const{name, dueDate} = todoObject;
    const html =`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();"
      class="delete-todo-button">Delete</button>`
  });
  todoListHTML += html; 
  console.log(todoListHTML);
}

  
