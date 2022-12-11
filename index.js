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
    localStorage.setItem("myArr", JSON.stringify("myArr"))
    moveToHtmlInput()
}

function moveToHtmlInput(){
    let listItem = ""
    for (let i = 0; i < myArr.length; i++){
        listItem += myArr[i] + " ";
    }
    taskSection.innerHTML = listItem;
}