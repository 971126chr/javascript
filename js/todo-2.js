const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    let modifyToDoBtn = document.createElement("button");
    modifyToDoBtn.className = "modify-todobtn";
    modifyToDoBtn.innerText = "수정";
    // modifyToDoBtn.addEventListener("click", modifyToDo);
    let delToDoBtn = document.createElement("button");
    delToDoBtn.innerText = "❌";
    // delToDoBtn.addEventListener("click", deleteToDo);
    li.append(span, modifyToDoBtn, delToDoBtn);
    toDoList.append(li);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}