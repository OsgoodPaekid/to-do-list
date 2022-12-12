const addListButton = document.getElementById("add-list")
const textSection = document.getElementById("text-section")
const taskSection = document.getElementById("task-section")
const taskForm = document.getElementById("task-form")
const myArr = []
const alertSection = document.getElementById("alert-section")
let editItem = false;


taskForm.addEventListener("submit", addItem)

function addItem (e){
    e.preventDefault();
    let taskValue = textSection.value;
    myArr.push(taskValue)
    localStorage.setItem("taskValue", textSection.value)
    localStorage.getItem("taskValue")
    moveToHtmlInput()
    // if (taskValue === ""){
    //     setTimeout(() => {
    //         alertSection.innerHTML = "no task entered"
    //     }, 3000)
    // }
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
    let div = document.createElement("div")
    alertSection.innerHTML = "No Task Entered"
    document.h2.appendChild(div)
    setTimeout(function(){
        div.parentNode.removeChild(div)
    }, 2000)
}