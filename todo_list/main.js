'use strict';

const listAdd = document.getElementById('listadd');
const doAdd = document.getElementById('doadd');
const list = document.getElementById('todolist');

doAdd.addEventListener('click', clickButton);

function clickButton() {
    let add = document.createElement('todolist');
    add.innerHTML = doAdd.value;
    list.appendChild(add);
}