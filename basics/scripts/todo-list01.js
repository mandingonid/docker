const todoList = [];
console.log(todoList);


function AddTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.ariaValueMax;
  // console.log(name);
  todoList.push(name);
  console.log(todoList);
}