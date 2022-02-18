'use strict';

const input = document.querySelector('.listadd');
const btn = document.querySelector('.doadd');
const item = document.querySelector('.item');

function clickButton() {
    const inputText = input.value;
    if(inputText === '') {
        input.focus();
        return ;
    }

    const newTodo = createList(inputText);
    item.appendChild(newTodo);
    input.value = "";
    
}

function createList (inputText) {
    const list = document.createElement('li');
    list.setAttribute('class', 'ltem_list');

    const todo = document.createElement('div');
    todo.setAttribute('class', 'item');

    const text = document.createElement('span');
    text.setAttribute('class', 'name');
    text.innerText = inputText;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can></i>';
    deleteBtn.addEventListener('click', () => {
        item.removeChild(list);
    })


    todo.appendChild(text);
    todo.appendChild(deleteBtn);

    list.appendChild(todo);

    return list;
}

btn.addEventListener('click', () => {
    clickButton();
})