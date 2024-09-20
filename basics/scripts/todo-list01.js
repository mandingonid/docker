let todoList = [];
console.log(todoList);

document.querySelector('.js-add-todo-button').addEventListener('click', () => {addTodo(); renderTodoList();});
// renderTodoList();

/*** 
let todoListHTML = "";
for (let index=0; index < todoList.length; index++){
  const todo = todoList[index];
  const html = "<p>${todo}</p>";
  todoListHTML += html;
}
***/

function addTodo(){
  let inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  console.log(name);
  todoList.push(name);
  console.log(todoList);
  inputElement = document.querySelector('.js-due-date-input');
  const dueDate = inputElement.value;
  todoList.push(dueDate)
  inputElement.value = "";
}

function renderTodoList(){
  let todoListHTML='';
  let index=0;
  const todoObject = todoList[index];

  todoList.forEach((todoObject, index) => {
    const{name, dueDate} = todoObject;

    /****** 
    const html =`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();"
     " class="delete-todo-button">Delete</button>`;
        todoListHTML += html;
  });
  *************/
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
    `
    todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list');
  console.log(todoListHTML);
}

  
