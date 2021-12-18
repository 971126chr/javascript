const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let modifyInput = document.createElement("input");
modifyInput.setAttribute("type", "text");
modifyInput.className = "todo-modify-input";

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li);
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    if (window.confirm("정말 삭제하시겠습니까?")) {
        li.remove();
        saveToDos();
    }

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
    li.append(span, modifyToDoButton, button);
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

function modifyToDo(event) {
    const li = event.target.parentElement;
    let toDoSpan = li.childNodes[0];
    toDoSpan.classList.add(HIDDEN_CLASSNAME);
    li.prepend(modifyInput);
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    // li.id = modifyToDoObj.id;
    console.log(modifyInput.value);
    // localStorage.getItem(TODOS_KEY, toDos);
    localStorage.getItem(toDos, modifyInput.value);
    localStorage.setItem(TODOS_KEY, modifyInput.value);
    paintToDo;
    saveToDos();
    // toDoSpan.classList.remove(HIDDEN_CLASSNAME);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}