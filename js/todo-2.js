const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

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

    let toDoSpan = document.createElement("span");
    toDoSpan.className = "todo-value";
    toDoSpan.innerText = newToDo.text;

    let modifyToDoBtn = document.createElement("button");
    modifyToDoBtn.className = "modify-todobtn";
    modifyToDoBtn.innerText = "수정";

    let delToDoBtn = document.createElement("button");
    delToDoBtn.innerText = "❌";
    delToDoBtn.className = "del-todobtn";

    modifyToDoBtn.addEventListener("click", modifyToDo);
    delToDoBtn.addEventListener("click", deleteToDo);

    li.append(toDoSpan, modifyToDoBtn, delToDoBtn);
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

    let modifyInput = document.createElement("input");
    modifyInput.setAttribute("type", "text");
    modifyInput.className = "todo-modify-input";
    modifyInput.focus();
    modifyInput.value = event.target.previousSibling.innerText;
    
    let toDoSpan = document.getElementsByClassName("todo-value");

    const finishModifyBtn = document.createElement("button");
    finishModifyBtn.className = "finish-modify-btn";
    finishModifyBtn.innerText = "수정 완료";
    
    // let modifyToDoBtnClick = event.target && event.target.previousSibling;
    // modifyToDoBtnClick.classList.add(HIDDEN_CLASSNAME);
    
    // let modifyToDoBtnClick = document.createElement("div");
    // modifyToDoBtnClick.append(toDoSpan, event.target);
    // modifyToDoBtnClick.classList.add(HIDDEN_CLASSNAME);

    li.prepend(modifyInput, finishModifyBtn);

    if (toDoSpan.innerText !== modifyInput.value) {
        modifyInput.onkeydown = function finishModifyEnter() {

            if(window.event.keyCode == 13) {
                modifyInput.classList.add(HIDDEN_CLASSNAME);
    
                let newToDoSpan = document.createElement("span");
                newToDoSpan.innerText = modifyInput.value;
    
                finishModifyBtn.classList.add(HIDDEN_CLASSNAME);
    
                li.prepend(newToDoSpan, event.target);
    
                toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    
                const newToDoObj = {
                    text: modifyInput.value,
                    id: Date.now()
                }
                
                toDos.push(newToDoObj);
                localStorage.setItem(TODOS_KEY, newToDoObj);
                
                // localStorage.setItem(TODOS_KEY, newToDo.text);
    
                // let finishModify = document.createElement("div");
                // finishModify.append(modifyInput, finishModifyBtn);
                // finishModify.className = "modify-todobtn-click";
    
            }
        }
    }

    
    event.target.previousSibling.remove();
    event.target.remove();
}

// function modifyToDo(event) {
//     const li = event.target.parentElement;

//     let toDoSpan = li.childNodes[0];
//     toDoSpan.classList.add(HIDDEN_CLASSNAME);
//     toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));

//     let finishModifyBtn = document.createElement("button");
//     finishModifyBtn.className = "finish-modify-btn";
//     finishModifyBtn.innerText = "수정 완료";

//     const modifyInput = document.createElement("input");
//     modifyInput.setAttribute("type", "text");
//     modifyInput.className = "todo-modify-input";
//     li.prepend(modifyInput, finishModifyBtn);

//     let modifyToDoBtn = document.querySelector(".modify-todobtn");
//     modifyToDoBtn.classList.add(HIDDEN_CLASSNAME);
//     console.log(finishModifyBtn);

//     modifyInput.focus();
//     modifyInput.value = toDoSpan.innerText;
//     modifyInput.addEventListener("blur", notModify);
//     modifyInput.onkeydown = function finishModifyEnter() {

//         if(window.event.keyCode == 13) {
//             const newToDo = modifyInput.value;
//             toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
//             const newToDoObj = {
//                 text: newToDo,
//                 id: Date.now()
//             }
//             toDos.push(newToDoObj);
//             // localStorage.removeItem(TODOS_KEY, toDos);
//             // newToDo.split('.');
//             finishModifyBtn.className = HIDDEN_CLASSNAME;
//             modifyInput.className = HIDDEN_CLASSNAME;
//             const newToDoSpan = document.createElement("span");
//             newToDoSpan.innerHTML = newToDo;
//             li.prepend(newToDoSpan);
//             localStorage.setItem(TODOS_KEY, JSON.stringify(newToDo));
//             console.log(newToDo);
//             saveToDos();
//         }
//     }
// }

// function notModify(event) {
//     let li = event.target.parentElement;
//     toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));

//     let toDoSpan = document.querySelector("li span");
//     toDoSpan.classList.remove(HIDDEN_CLASSNAME);

//     let modifyToDoBtn = document.querySelector(".modify-todobtn");
//     modifyToDoBtn.classList.remove(HIDDEN_CLASSNAME);

//     let delToDoBtn = document.querySelector("li .del-todobtn");

//     let modifyInput = document.querySelector(".todo-modify-input");
//     modifyInput = document.createElement("input");
//     modifyInput.setAttribute("type", "text");
//     modifyInput.classList.add(HIDDEN_CLASSNAME);

//     let finishModifyBtn = document.querySelector("li .finish-modify-btn");
//     finishModifyBtn.classList.add(HIDDEN_CLASSNAME);
//     finishModifyBtn.classList.remove("finish-modify-btn");

//     li.prepend(toDoSpan, modifyToDoBtn, delToDoBtn);
// }

toDoForm.addEventListener("submit", handleToDoSubmit);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}