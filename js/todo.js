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

// function realDel(deleteToDo) {
//     if (window.confirm("정말 삭제하시겠습니까?")) {
//         const li = document.getElementsByTagName("li");
//         console.log(li[0].getElementsByTagName("button"));
//         console.log(li.childNodes('button'));
//         li.remove();
//     }
// }

function deleteToDo(event) {
    const li = event.target.parentElement;
    
    console.log(li);
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();

    if (window.confirm("정말 삭제하시겠습니까?")) {
        const li = document.getElementsByTagName("li");
        console.log(li[0].getElementsByTagName("button"));
        
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
    modifyInput.classList.add(HIDDEN_CLASSNAME);
    li.append(modifyInput, span, modifyToDoButton, button);
    toDoList.append(li);
}

function modifyToDo(paintToDo) {
    const ToDoSpan = document.querySelector("li span");
    ToDoSpan.classList.add(HIDDEN_CLASSNAME);
    modifyInput.classList.remove(HIDDEN_CLASSNAME);
    let modifyToDoButton = document.querySelector("#todo-list li button:nth-child(2)");
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
    console.log();
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