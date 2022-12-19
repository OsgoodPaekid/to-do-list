const addListButton = document.getElementById("add-list")
const textSection = document.getElementById("text-section")
const taskSection = document.getElementById("task-section")
const taskForm = document.getElementById("task-form")
const myArr = []
const alertSection = document.getElementById("alert-section")
const clearTasks = document.getElementById("clear-tasks")
let editItem = false;


taskForm.addEventListener("submit", addItem)

function addItem (e){
    e.preventDefault();
    let taskValue = textSection.value;
    myArr.push(taskValue)
    localStorage.setItem("taskValue", textSection.value)
    localStorage.getItem("taskValue")
    moveToHtmlInput()

    removeDiv()
}

function moveToHtmlInput(){
    let listItem = ""
    for (let i = 0; i < myArr.length; i++){
        listItem += `<ul>${myArr[i]}</ul>`;
    }
    taskSection.innerHTML = listItem;
}

const storedValue = localStorage.getItem("taskValue")
        if(storedValue !== false){
            myArr.push(storedValue)
        }
        moveToHtmlInput()


function removeDiv(){
    if (textSection.value === ""){let alertMessage = document.getElementById("alert-message");
    alertMessage.innerHTML = "No Task Entered"

    setTimeout(function(){
        alertMessage.innerHTML = ""
    }, 2000)}
}

function clearAll(){
    clearTasks.addEventListener("click", function(){
        taskSection.innerHTML = ""
    })
}

clearAll()