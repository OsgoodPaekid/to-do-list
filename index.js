const addListButton = document.getElementById("add-list")
const textSection = document.getElementById("text-section")
const taskSection = document.getElementById("task-section")
const taskForm = document.getElementById("task-form")

taskForm.addEventListener("submit", addItem)

function addItem (e){
    e.preventDefault();
    const taskValue = textSection.value;
    console.log(taskValue)
    taskValue.innerHTML = taskSection
}