const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function realDel(deleteToDo) {
    if(confirm("정말 삭제하시겠습니까?")) {
        return;
    }
    else {
        //deleteToDo();
        li.remove();
    }
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    realDel();
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function modifyToDo(paintToDo) {
    const span = document.querySelector("li span");
    span.remove();
    modifyInput.classList.remove(HIDDEN_CLASSNAME);
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    let modifyToDoButton = document.createElement("button");
    modifyToDoButton.className = "modify-todobtn";
    modifyToDoButton.innerText = "수정";
    modifyToDoButton.addEventListener("click", modifyToDo);
    let button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    const modifyInput = document.createElement("input");
    modifyInput.setAttribute("type", "text");
    modifyInput.classList.add(HIDDEN_CLASSNAME);
    li.append(modifyInput, span, modifyToDoButton, button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }
    console.log();
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}