let myArr = []
const addListButton = document.getElementById("add-list")
const textSection = document.getElementById("text-section")
let taskSection = document.getElementById("task-section")

addListButton.addEventListener("click", function(){
    myArr.push(textSection)
    textSection.value = ""
    localStorage.setItem("myArr", JSON.stringify("myArr"))
    moveToHtmlInput()
})

function getInputValue(){
    let inputValue = document.getElementById("text-Section").value;
    alert(inputValue)
}
