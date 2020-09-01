const btn = document.querySelector('button');
const input = document.querySelector('input');
const listSpace = document.querySelector('.listSpace');
const todoArr = [];

btn.addEventListener('click', function(e) {
    const todo = document.createElement('p');
    const removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove Task from List";
    todo.innerText = input.value;
    todoArr.push(todo.innerText);
    todo.appendChild(removeButton);
    listSpace.appendChild(todo);
    input.value = "";
    e.preventDefault();
    localStorage.setItem('Todos', JSON.stringify(todoArr));
})

listSpace.addEventListener('click', function(e) {
    if(e.target.tagName === "BUTTON") {
        e.target.parentElement.remove() = true;
    } else if (e.target.tagName === "P") {
        e.target.style.textDecoration = 'line-through';
    }
})