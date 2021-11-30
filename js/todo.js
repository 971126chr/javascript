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
        // const li = document.getElementsByTagName("li");
        // console.log(li[0].getElementsByTagName("button"));
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
    // modifyInput.classList.add(HIDDEN_CLASSNAME);
    li.append(span, modifyToDoButton, button);
    toDoList.append(li);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

function modifyToDoBtnClick() {
    localStorage.removeItem(toDos, saveToDos);
    saveToDos = null;
    localStorage.setItem(toDos, saveToDos);
    toDos.push(newToDoObj);
}

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
    console.log(li);
    let ToDoSpan = li.childNodes[0];
    // console.log(ToDoSpan[0]);
    console.log()
    // li.modifyInput.classList.remove(HIDDEN_CLASSNAME);
    ToDoSpan.classList.add(HIDDEN_CLASSNAME);
    let modifyToDoButton = document.querySelector("#todo-list li button:nth-child(2)");
    console.log(li.childNodes);
    li.prepend(modifyInput);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}