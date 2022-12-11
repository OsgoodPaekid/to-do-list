const addListButton = document.getElementById("add-list")
const textSection = document.getElementById("text-section")
const taskSection = document.getElementById("task-section")
const taskForm = document.getElementById("task-form")
const myArr = []


taskForm.addEventListener("submit", addItem)

function addItem (e){
    e.preventDefault();
    let taskValue = textSection.value;
    myArr.push(taskValue)
    localStorage.setItem("taskValue", textSection.value)
    localStorage.getItem("taskValue")
    moveToHtmlInput()
}

function moveToHtmlInput(){
    let listItem = ""
    for (let i = 0; i < myArr.length; i++){
        listItem += `<ul>${myArr[i]}</ul>`;
    }
    taskSection.innerHTML = listItem;
}