const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const modifyInput = document.createElement("input");
modifyInput.setAttribute("type", "text");
modifyInput.className = "todo-modify-input";

let modifyToDoBtn = document.createElement("button");
modifyToDoBtn.className = "modify-todobtn";
modifyToDoBtn.innerText = "수정";
let delToDoBtn = document.createElement("button");
delToDoBtn.innerText = "❌";

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
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
    modifyToDoBtn.addEventListener("click", modifyToDo);
    delToDoBtn.addEventListener("click", deleteToDo);
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

function finishModifyToDo(event) {
    event.preventDefault();
    const li = event.target.parentElement;
    let toDoSpan = li.childNodes[0];
    const newToDo = modifyInput.value;
    localStorage.getItem(TODOS_KEY, newToDo);
    toDoSpan.classList.remove(HIDDEN_CLASSNAME);
    modifyToDoBtn.classList.add(HIDDEN_CLASSNAME);
    li.prepend(toDoSpan, finishModifyBtn, delToDoBtn);
    console.log(newToDo);
}

function modifyToDo(event) {
    const li = event.target.parentElement;
    let toDoSpan = li.childNodes[0];
    toDoSpan.classList.add(HIDDEN_CLASSNAME);
    modifyToDoBtn.classList.add(HIDDEN_CLASSNAME);
    li.prepend(modifyInput);
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    let finishModifyBtn = document.createElement("button");
    finishModifyBtn.className = "modify-todobtn";
    finishModifyBtn.innerText = "수정 완료";
    console.log(finishModifyBtn);
    finishModifyBtn.onkeydown = function (event) {
        if(window.event.keyCode == 13) {
            const newToDo = modifyInput.value;
            localStorage.getItem(TODOS_KEY, newToDo);
            toDoSpan.classList.remove(HIDDEN_CLASSNAME);
            li.prepend(toDoSpan, finishModifyBtn, delToDoBtn);
        }
    }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}